import React from 'react'

function Menu(props) {
    return <nav className="navbar fixed-top navbar-expand-md navbar-dark">

    <div className="container">
    <a className="navbar-brand" href="/#">
      <img src="Images/logo.jpg" alt="" height="40"></img>
    </a>

    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
      <li className="nav-item">
        <a className="nav-link" href="#banner">Home</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#features">Features</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#testemonial">Customers</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#prices">Plans and Pricing</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#footer">Contacts</a>
      </li>
    </ul>
  </div>
  </div>
  </nav>
  
}

export default Menu;