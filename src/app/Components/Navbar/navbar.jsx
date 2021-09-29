import React, { useContext } from 'react'
import {Link} from 'react-router-dom'
import './navbar.css'
import {AuthContext} from '../../Context/auth'


function Navbar() {

  const {setLogged} = useContext(AuthContext)

  function Logout() {
    setLogged(false);
    localStorage.removeItem('logged');
  }

    return <nav className="navbar fixed-top navbar-expand-md navbar-dark">

    <div className="container-fluid">
    <Link to="/#" className="navbar-brand" href="/#">
      <img src="/Images/logo.jpg" alt="" height="40"></img>
    </Link>

    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
    <ul className="navbar-nav mb-2 mb-lg-0">

    <li className="nav-item">
        <Link to="/app/home" className="nav-link">Home</Link>
      </li>
      
      <li className="nav-item">
        <Link to="/app/new-user" className="nav-link" >New User</Link>
      </li>

      <li className="nav-item">
        <a href="/app" onClick={Logout} className="nav-link logout">Logout</a>
      </li>
      
    </ul>
  </div>
  </div>
  </nav>
}

export default Navbar