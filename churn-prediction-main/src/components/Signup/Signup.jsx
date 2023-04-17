import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import "../Login/Login.css";

import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    updateProfile,
    signOut,
} from "firebase/auth";
import { useLocation } from 'react-router-dom';
import { auth } from "../../firebase-config";
import Navbar from '../navbar/Navbar';


export default function Signup({ update }) {
    const {state} = useLocation()
    const {email} = state || {}
    // console.log("emailll",state.email)
    const navigate = useNavigate()
    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");
    const [username, setUsername] = useState("")
    const [contact, setContact] = useState("")



    const register = async () => {

        try {
            const user = await createUserWithEmailAndPassword(
                auth,
                registerEmail,
                registerPassword,
            );
            await updateProfile(auth.currentUser, { displayName: username, phoneNumber:contact }).catch(
                (err) => console.log(err)
            );
            navigate("/");
            console.log(user);
        } catch (error) {
            console.log(error.message);

        }
    };

    const [user, setUser] = useState({});

    onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
    });

    return (
        <div>
            <Navbar />
            <Container className="container" sx={{ display: 'flex' }}>
                <div>
                    <div className="form-ctn">
                        <h1 class="form-heading">Sign Up</h1>
                        <TextField id="outlined-basic" label="Username" variant='outlined' value={username} onChange={(e) => setUsername(e.target.value)} />
                        <TextField id="outlined-basic" label="Contact" variant='outlined' value={contact} onChange={(e) => setContact(e.target.value)} />
                        <TextField id="outlined-basic" label="Email" type="email" variant="outlined" value={email ? email : registerEmail} onChange={(e) => setRegisterEmail(e.target.value)} />
                        <TextField id="outlined-basic" label="Password" type="password" variant="outlined" value={registerPassword} onChange={(e) => setRegisterPassword(e.target.value)} />
                        {/* <TextField id="outlined-basic" label="Password" variant="outlined" value={registerPassword} onChange={(e) => setRegisterPassword(e.target.value)} /> */}
                        <Button class="btn-submit" variant="contained" onClick={() => register()}>Submit</Button>
                    </div>
                </div>
            </Container>
        </div>
    )
}