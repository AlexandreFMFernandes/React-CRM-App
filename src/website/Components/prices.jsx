import React from 'react'


function Prices() {
    return <section id="prices">
        <div className="container">
            <div className="row text-center">
                <div className="title">
                    <h1>Plans and Prices</h1>
                    <p>Start your free trial today! Credit card not necessary</p>    
                </div>
            </div>  

            <div className="row text-center">
                <div className="col-lg-4">
                    <div className="card">

                        <div className="card-header">
                            <h1>Free</h1>
                        </div>

                        <div className="card-body">
                            <h2> 0€</h2>
                            <p> Up to 5 users</p>
                            <p>No support provided</p>
                            <button className="btn btn-lg btn-outline-primary">Start Now</button>
                        </div>
                    </div>

                </div>  

                <div className="col-lg-4">
                    <div className="card">

                        <div className="card-header">
                            <h1>Pro</h1>
                        </div>

                        <div className="card-body">
                            <h2> 49.90€</h2>
                            <p> Up to 50 users</p>
                            <p>Email Support</p>
                            <button className="btn btn-lg btn-outline-primary">Sign Up Now</button>
                        </div>
                    </div>

                </div>

                <div className="col-lg-4">
                    <div className="card">

                        <div className="card-header">
                            <h1>Premium</h1>
                        </div>

                        <div className="card-body">
                            <h2> 99.00€</h2>
                            <p> Unlimited users</p>
                            <p> Email and phone support </p>
                            <button className="btn btn-lg btn-outline-primary">Sign Up Now</button>
                        </div>
                    </div>

                </div>  

            </div>    
            
        </div>
    </section>
}

export default Prices;