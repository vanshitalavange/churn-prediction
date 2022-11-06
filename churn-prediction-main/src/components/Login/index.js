
import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom'
import "./Login.css";

import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Navbar from "../../components/navbar/Navbar"
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { auth } from "../../firebase-config";


export default function Login({update}) {
 
    const navigate = useNavigate()
  
    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");

    const [user, setUser] = useState({});

    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    const login = async () => {
      try {
        const user = await signInWithEmailAndPassword(
          auth,
          loginEmail,
          loginPassword
        );
        console.log(user);
        navigate("/");
      } catch (error) {
        alert("User doesn't exist")
        console.log(error.message);
      }
    };

    const logout = async () => {
      await signOut(auth);
    };

  return (
    <div>
    <Navbar />
    <Container className="container" sx={{display: 'flex'}}>
      <div>
        <div className="form-ctn">
          <h1 class="form-heading">Login</h1>
          <TextField onChange={(event) => setLoginEmail(event.target.value)} id="outlined-basic" label="Username" variant="outlined" value={loginEmail}  />
          <TextField onChange={(event) => setLoginPassword(event.target.value)} type="password" id="outlined-basic" label="Password" variant="outlined" value={loginPassword}  />
          {/* <TextField onChange={(event) => setLoginPassword(event.target.value)} id="outlined-basic" label="Password" variant="outlined" value={loginPassword}  /> */}
          <Button  class="btn-submit" variant="contained" onClick={login}>Submit</Button>
        </div>
      </div>
    </Container>
    </div>
  )
}
