import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import './home.css'
import Navbar from '../Components/Navbar/navbar'
import UserList from '../Components/UserList/user-list'
import firebase from '../Config/firebase';
import 'firebase/firestore';
import SweetAlert from 'react-bootstrap-sweetalert';
import generatePDF from '../Reports/Clients/clients'


function Home() {

    const [clients, setClients] = useState([]);
    const [search, setSearch] = useState('');
    const [text, setText] = useState('');
    const [deleted, setDeleted] = useState('');

    //confirm user to delete
    const [confirm, setConfirm] = useState(false)

    //Store ID of user to delete 
    const [confirmID, setConfirmID] = useState('')
    

    function deleteUser(id) {
        firebase.firestore().collection('clients').doc(id).delete().then(() => {
            setDeleted(id);
            setConfirm(false)
        })
    }

    function confirmDeleteUser(id) {
        setConfirmID(id)
        setConfirm(true)
    }
  

    useEffect(function(){

        let userList = [];

        firebase.firestore().collection('clients').get().then(
             async function(result) {
                await result.docs.forEach(function(doc){
                    if(doc.data().name.indexOf(search) >= 0) {
                        userList.push(
                            {
                                id:doc.id,
                                name: doc.data().name,
                                email: doc.data().email,
                                mobile: doc.data().mobile
                            }
                        )
                    }
                });

              setClients(userList)
            })
    }, [search, deleted]);

    return <div >
        <Navbar />
        <div className="container-fluid title">
            <h1>Register New User</h1>

        <div className="row">
            <div className="col-4">
            <Link to="/app/new-user" className=" btn btn-primary btn-click" type="button"><i className="fas fa-plus"></i> New User</Link>
            <button onClick={(event) => generatePDF(clients)} className="btn btn-danger btn-click" type="button" id="button-addon2"><i className="far fa-file-pdf"></i> Generate PDF</button>
            </div>

            <div className="col-8">
                <div className="input-group mb-3">
                    <input onChange={(event) => setText(event.target.value)} type="text" className="form-control" placeholder="Search by name" aria-describedby="button-addon2"/>
                    <button onClick={(event) => setSearch(text)} className="btn btn-primary" type="button" id="button-addon2"><i className="fas fa-search "></i> Search</button>
                </div>
            </div>
        </div>

        <UserList arrayClients={clients} deleteUser={confirmDeleteUser} />
        
        {
            confirm ?
        <SweetAlert
            success
            showCancel
            showCloseButton
            confirmBtnText="Yes"
            confirmBtnBsStyle="success"
            cancelBtnText="No"
            cancelBtnBsStyle="light"
            title="Are you sure you want to delete user?"
            onConfirm={() => deleteUser(confirmID)}
            onCancel={() => setConfirm(false)}
            reverseButtons="true"
            >
            You will not be able to recover this user.
        </SweetAlert>
        : null
         }   
        </div>
        
    </div>
}

export default Home