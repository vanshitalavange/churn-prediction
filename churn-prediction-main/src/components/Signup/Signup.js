
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
    signOut,
} from "firebase/auth";

import { auth } from "../../firebase-config";
import Navbar from '../navbar/Navbar';


export default function Signup({ update }) {

    const navigate = useNavigate()
    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");

    const register = async () => {
        try {
            const user = await createUserWithEmailAndPassword(
                auth,
                registerEmail,
                registerPassword
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
                        <h1>Signup</h1>
                        <TextField id="outlined-basic" label="Username" variant="outlined" value={registerEmail} onChange={(e) => setRegisterEmail(e.target.value)} />
                        <TextField id="outlined-basic" label="Password" type="password" variant="outlined" value={registerPassword} onChange={(e) => setRegisterPassword(e.target.value)} />
                        {/* <TextField id="outlined-basic" label="Password" variant="outlined" value={registerPassword} onChange={(e) => setRegisterPassword(e.target.value)} /> */}
                        <Button variant="contained" onClick={register}>Submit</Button>
                    </div>
                </div>
            </Container>
        </div>
    )
}
