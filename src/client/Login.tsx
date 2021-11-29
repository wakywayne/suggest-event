import React from 'react'
import { useState, useEffect } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { apiService } from '../client/utils/apiService';
export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [formKey, setFormKey] = useState(0);
    const navigate = useNavigate();


    const handleLogin = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        apiService('/auth/login', 'POST', { email, password })
            .then((token) => {
                localStorage.setItem('token', token);
                navigate('suggestEvent');
                setFormKey(formKey + 1);
            })
            .catch(() => {
                alert("Credentials were not accepted");
                setFormKey(formKey + 1);
            })
    }
    return (
        <>
            <div className="p-2" style={{ backgroundColor: "blue" }}>
                <h1 className="text-center mt-2 py-3" style={{ color: "white" }}>Login Page</h1>
                <div className="row justify-content-center">
                    <article style={{ border: "3px solid yellow", borderRadius: "5px" }} className="bg-primary w-75">
                        <h5>You must log in to add an event, this prevents us from being spammed by losers on the internet.<hr /> Thanks for being part of the fun!</h5>
                    </article>

                </div>
            </div>
            <hr />
            <div className="row">
                <Form key={formKey} style={{ width: "90%", border: "2px solid slateGrey", borderRadius: "5px" }} className="mx-auto mt-2 py-2">
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" />
                        <Form.Text><Link to="/register">New here? Click to make an account</Link></Form.Text>
                    </Form.Group>
                    <Button variant="primary" type="submit" onClick={handleLogin}>
                        Submit
                    </Button>
                </Form>
            </div>


        </>
    )
}
