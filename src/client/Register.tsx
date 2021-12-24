import React from 'react'
import { useState, useEffect } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate, Navigate } from 'react-router-dom';
import { apiService } from '../client/utils/apiService';
export default function Register() {
    const [registername, setRegisterName] = useState('');
    const [registeremail, setRegisterEmail] = useState('');
    const [registerpassword, setRegisterPassword] = useState('');
    const [registerrepassword, setRegisterRePassword] = useState('');
    const [registerformKey, setRegisterFormKey] = useState(0);
    const navigate = useNavigate();


    const handleRegisterLogin = (e: React.MouseEvent<HTMLButtonElement>) => {
        // e.preventDefault();
        if (registerpassword === registerrepassword) {
            const account = {
                personsname: registername,
                email: registeremail,
                userpassword: registerpassword
            }

            apiService('/auth/register', 'POST', account)
                .then(token => {
                   
                    localStorage.setItem('token', token.token);
                    localStorage.setItem('uId', token.userId);
                    navigate('/suggestEvent');
                    setRegisterFormKey(registerformKey + 1);
                })
                .catch((err) => console.log(err));
        } else {
            alert("Seems something wrong with your credentials, passwords probably are different");
        }
    }
    return (
        <>
            <div className="p-2" style={{ backgroundColor: "blue" }}>
                <h1 className="text-center mt-2 py-3" style={{ color: "white" }}>Registration Page</h1>
                <div className="row justify-content-center">
                    <article style={{ border: "3px solid yellow", borderRadius: "5px" }} className="bg-primary w-75">
                        <h5>You must be able to log in so you can  add an event, this prevents us from being spammed by losers on the internet.<hr />
                            Thanks for being part of the fun!</h5>
                    </article>

                </div>
            </div>
            <hr />
            <div className="row">
                <Form key={registerformKey} style={{ width: "90%", border: "2px solid slateGrey", borderRadius: "5px" }} className="mx-auto mt-2 py-2">
                    <Form.Group className="mb-3" controlId="formBasicText">
                        <Form.Label>Name</Form.Label>
                        <Form.Control onChange={(e) => setRegisterName(e.target.value)} type="text" placeholder="Enter name (Optional)" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>*Email address</Form.Label>
                        <Form.Control onChange={(e) => setRegisterEmail(e.target.value)} type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>*Password</Form.Label>
                        <Form.Control onChange={(e) => setRegisterPassword(e.target.value)} type="password" placeholder="Password" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicReEnterPassword">
                        <Form.Label>*ReEnter Password</Form.Label>
                        <Form.Control onChange={(e) => setRegisterRePassword(e.target.value)} type="password" placeholder="Password" />
                    </Form.Group>
                    <Button variant="primary" type="button" onClick={handleRegisterLogin}>
                        Submit
                    </Button>
                </Form>
            </div>


        </>
    )
}
