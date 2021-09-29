import React from 'react';
import {Link} from 'react-router-dom'
import './user-list.css'
//import clients from '../../Data/Clients';


function UserList(props) {


    return <table className="table table-bordered table-hover">
        <thead>
            <tr className="table-secondary">
                <th scope="col">ID</th>
                <th scope="col">Name</th>
                <th scope="col">E-mail</th>
                <th scope="col">Mobile</th>
                <th scope="col" className="column-action"></th>
            </tr>
        </thead>

        <tbody>

            {props.arrayClients.map((client) => {
                return <tr key={client.id}>
                        <th scope="row">{client.id}</th>
                            <td>{client.name}</td>
                            <td>{client.email}</td>
                            <td>{client.mobile}</td>
                            <td>
                                <Link to={'/app/edit-user/' + client.id}><i className="fas fa-edit icon-action"></i></Link>
                                <Link to="#" onClick={() => props.deleteUser(client.id)}><i className="far fa-trash-alt red"></i></Link>
                            </td>
                    </tr>
                
            })}
            
           
  </tbody>
</table>
}

export default UserList;