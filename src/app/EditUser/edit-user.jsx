import React, {useState, useEffect} from 'react'
import {Link, Redirect} from 'react-router-dom'
import './edit-user.css'
import Navbar from '../Components/Navbar/navbar'
import firebase from '../Config/firebase'
import 'firebase/firestore'


function EditUser(props) {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [mobile, setMobile] = useState('');
    const [message, setMessage] = useState('')
    const [success, setSuccess] = useState('N');

    const db = firebase.firestore()

    useEffect(() => {
        
        firebase.firestore().collection('clients').doc(props.match.params.id).get().then((result) => {
            setName(result.data().name);
            setEmail(result.data().email);
            setMobile(result.data().mobile);
        })
    }, [props.match.params.id])

    function alterUser() {

        if (name.length === 0) {
            setMessage('Please inform name')
        } else if (email.length === 0) {
            setMessage('please fill in email')
        } else if (mobile.length === 0) {
            setMessage('please fill in mobile number')
        } else {

        db.collection('clients').doc(props.match.params.id).update({
            name: name,
            email: email,
            mobile: mobile
        }).then(() => {
            setMessage('')
            setSuccess('Y')
        }).catch((error) => {
            setMessage(error);
            setSuccess('N');
        })
        }
    }



    return <div>
        <Navbar />
        <div className="container-fluid title">
            
        <div className="offset-lg-3 col-lg-6">    
        <h1>Edit User</h1>

        <form>

            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">ID</label>
                <input type="text" value={props.match.params.id} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" disabled/>
            </div>


            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
                <input onChange={(event) => setName(event.target.value)} value={name} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
            </div>

            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
                <input onChange={(event) => setEmail(event.target.value)} value={email} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
            </div>

            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Mobile</label>
                <input onChange={(event) => setMobile(event.target.value)} value={mobile} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
            </div>
           
            <div className="text-center ">
                <Link to="/app/home" className="btn btn-outline-primary btn-action">Cancel</Link>
                <button onClick={alterUser} type="button" className="btn btn-primary btn-action">Save</button>
            </div>

            {message.length > 0 ? <div className="alert alert-danger mt-2" role="alert">{message}</div> : null}
            {success === 'Y' ? <Redirect to='/app/home' /> : null}
        
        </form>
        </div>
        </div>
    </div>
}

export default EditUser