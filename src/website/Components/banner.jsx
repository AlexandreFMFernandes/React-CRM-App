import React from 'react'


function Banner() {
    return <section id="banner">
        <div className="container">
            <div className="row">

                <div className="col-lg-6">
                    <h1>A simple to configure and use CRM platform</h1>
                    <h4> Manage your clients in a single place</h4>
                    <a href="/app/new-account" className="btn btn-dark btn-lg btn-banner">Create Account</a>
                    <a href="/app" className="btn btn-outline-light btn-lg btn-banner">Login</a>
                </div>

                <div className="col-lg-6">
                    <img src="/Images/crm.jpg" alt="CRM"></img>
                </div>


            </div>
        </div>
    </section>
}

export default Banner;