import './ContactUs.css'
import Navbar from '../navbar/Navbar'
import { Footer } from '../../containers'
import "../AboutUs/AboutUs.css"
import { useState } from 'react'
import emailjs from 'emailjs-com';

import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import { TextareaAutosize } from '@mui/material'

export const ContactUs = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")
    const register = () => {
        // event.preventDefault();
        emailjs.send(
            'service_mz7w59g',
            'template_roiooly',
            {
                from_name: name,
                from_email: email,
                message: message,
            },
            'J-2TEU2hBZqoaKVvJ'
        )
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                // TODO: Add success message to UI
            })
            .catch((error) => {
                console.error('FAILED...', error);
                // TODO: Add error message to UI
            });
    };
    return (
        <div className="contact-us">
            <Navbar />
            <Container className="container" sx={{ display: 'flex' }}>
                <div>
                    <div className="form-ctn">
                        <h1 class="form-heading">Contact Us</h1>
                        <input className="contact-field" type="text" placeholder='Name' onChange={(e) => setName(e.target.value)}/>
                        <input className="contact-field" type="text" placeholder="Email" onChange={(e) => setEmail(e.target.value)}/>
                        <textarea className="contact-field" placeholder='Your message' onChange={(e) => setMessage(e.target.value)}/>
                        <button className="btn-contact" onClick={() => register()}>Submit</button>
                        {/* <TextField id="outlined-basic" label="Name" variant='outlined' value={""} onChange={(e) => setName(e.target.value)} />
                        <TextField id="outlined-basic" label="Email" type="email" variant="outlined" value={""} onChange={(e) => setEmail(e.target.value)} />
                        <TextareaAutosize className="text-area" id="outlined-basic" variant="outlined" placeholder="Your message"
                            style={{ width: "100%", border: "none", height: "5rem", padding: "0.5rem 1rem" }} value={""} onChange={(e) => setMessage(e.target.value)} />
                        <Button class="btn-submit" variant="contained" onClick={() => register()}>Submit</Button> */}
                    </div>
                </div>
            </Container>
            <Footer />
        </div>
    )
}