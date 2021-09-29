import React, {useState} from 'react'
import {Link, Redirect} from 'react-router-dom'
import './new-account.css'

import firebase from '../Config/firebase';
import 'firebase/auth';




function NewAccount() {


    //Email
    const [email, setEmail] = useState('');

    //Password
    const [password, setPassword] = useState('');
   
    //Message
    const [message, setMessage] = useState('');  

    //Success
    const [success, setSuccess] = useState('');
    
    //REGISTER USER
    function registerUser() {
        setMessage('');

        if (!email || !password) {
            setMessage('Please fill all fields')
        } 

        firebase.auth().createUserWithEmailAndPassword(email, password).then(result => {
            setSuccess('Y')
        }).catch(error => {
            setSuccess('N');
            setMessage(error.message);
        })

    }


    return <div className="d-flex align-items-center text-center form-container">
        <form className="form-signin">
            <img className="mb-4" src="/Images/logo-small.svg" alt="" width="72" height="57"/>
            <h1 className="h3 mb-3 fw-normal">Create Account</h1>

            <div className="form-floating">
                <input onChange={(event) => setEmail(event.target.value)} type="email" className="form-control" id="floatingInput" placeholder="E-mail"/>
                <label htmlFor="floatingInput">Email </label>
            </div>

            <div className="form-floating">
                <input onChange={(event) => setPassword(event.target.value)} type="password" className="form-control" id="floatingPassword" placeholder="Password"/>
                <label htmlFor="floatingPassword">Password</label>
            </div>

            <button onClick={registerUser} className="w-100 btn btn-lg btn-primary" type="button">Create Account</button>
            
            {message.length > 0 ? <div className="alert alert-danger mt-2" role="alert">{message}</div> : null}
            {success === 'Y' ? <Redirect to='/app/home' /> : null}
            
            <div className="login-links mt-5">
                <Link to="/app" className="mx-3">Already have an account</Link>
            </div>
            
            <p className="mt-5 mb-3 text-muted">&copy; Developed by Alexandre Fernandes</p>
    </form>
    </div>
}

export default NewAccount