import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import './reset-password.css'

import firebase from '../Config/firebase';
import 'firebase/auth';


function ResetPassword() {

    const [email, setEmail] = useState('');

    const [message, setMessage] = useState(''); 
    const [success, setSuccess] = useState('');

    function recoverPassword() {
        firebase.auth().sendPasswordResetEmail(email).then(result => {
            setMessage('');
            setSuccess('Email sent successfully');
        }).catch(error => {
            setSuccess('');
            setMessage('Error sending email: ' + error.message);
        })
    }


    return <div className="d-flex align-items-center text-center form-container">
        <form className="form-signin">
            <img className="mb-4" src="/Images/logo-small.svg" alt="" width="72" height="57"/>
            <h1 className="h3 mb-3 fw-normal">Recover Password</h1>

            <div className="form-floating">
                <input onChange={(event) => setEmail(event.target.value)} type="email" className="form-control" id="floatingInput" placeholder="E-mail"/>
                <label htmlFor="floatingInput">Email </label>
            </div>

            <button onClick={recoverPassword} className="w-100 btn btn-lg btn-primary mt-3" type="button">Send</button>

            {
               message.length > 0  ? 
            <div className="alert alert-danger mt-2" role="alert">
                {message}
            </div> : null
            }

            {
               success.length > 0  ? 
            <div className="alert alert-success mt-2" role="alert">
                {success}
            </div> : null
            }

            <div className="login-links mt-5">
                <Link to="/app/new-account" className="mx-3">Create Account</Link>
            </div>
            
            <p className="mt-5 mb-3 text-muted">&copy; Developed by Alexandre Fernandes</p>
    </form>
    </div>
}

export default ResetPassword