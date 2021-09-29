import React,  {useState, useContext} from 'react'
import {Link, Redirect} from 'react-router-dom'
import './login.css'

import firebase from '../Config/firebase';
import 'firebase/auth';
import {AuthContext} from '../Context/auth'




function Login() {

    //Email
    const [email, setEmail] = useState('');

    //Password
    const [password, setPassword] = useState('');

    const [success, setSuccess] = useState('');   
    
    //To check logged users
    const {setLogged} = useContext(AuthContext);


    function UserLogin(){
        firebase.auth().signInWithEmailAndPassword(email, password)
          .then(function(firebaseUser){
            //to persist data for session
            localStorage.setItem('logged', 'Y')
            setLogged(true);
            setSuccess('Y');
          })
          .catch(function(error){
            localStorage.setItem('logged', 'N')
            setLogged(false);
            setSuccess('N');
          });
      }   

    function changeEmail(event) {
        setEmail(event.target.value);
    }

    function changePassword(event) {
        setPassword(event.target.value);
    }


    return <div className="d-flex align-items-center text-center form-container">
        <form className="form-signin">
            <img className="mb-4" src="Images/logo-small.svg" alt="" width="72" height="57"/>
            <h1 className="h3 mb-3 fw-normal">Login</h1>

            <div className="form-floating">
                <input onChange={changeEmail} type="email" className="form-control" id="floatingInput" placeholder="E-mail"/>
                <label htmlFor="floatingInput">Email </label>
            </div>

            <div className="form-floating">
                <input onChange={changePassword} type="password" className="form-control" id="floatingPassword" placeholder="Password"/>
                <label htmlFor="floatingPassword">Password</label>
            </div>

            <button onClick={UserLogin} className="w-100 btn btn-lg btn-primary" type="button">Sign in</button>
            
            {
               success === 'N' ? 
            <div className="alert alert-danger mt-2" role="alert">
                Incorrect E-mail or password
            </div> : null
            }

            { success === 'Y' ? <Redirect to='app/home' /> : null}
            
            <div className="login-links mt-5">
                <Link to="/app/reset-password" className="mx-3">Forgot password</Link>
                <Link to="/app/new-account" className="mx-3">Create Account</Link>
            </div>
            
            <p className="mt-5 mb-3 text-muted">&copy; Developed by Alexandre Fernandes</p>
    </form>
    </div>
}

export default Login