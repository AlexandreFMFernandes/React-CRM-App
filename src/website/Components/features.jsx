import React from 'react'


function Features() {
    return <section id="features">
        <div className="container">
            <div className="row">

                <div className="col-lg-4 feature-box">
                    <i className="icon fas fa-heart fa-5x"></i>
                    <h3> Easy to use</h3>
                    <p>The system has a very easy and simple interface to use</p>

                </div>

                <div className="col-lg-4 feature-box">
                    <i className="icon fas fa-globe fa-5x"></i>
                    <h3> Anywhere</h3>
                    <p>Manage the your business flow effeciently, wherever you are</p>
                    
                </div>

                <div className="col-lg-4 feature-box">
                    <i className="icon fas fa-columns fa-5x"></i>
                    <h3> Structure is everything</h3>
                    <p>Have a well structured client database</p>
                    
                </div>


            </div>
        </div>
    </section>
}

export default Features;