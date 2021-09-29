import React from 'react'


function Testemonials() {
    return <section id="testemonial">
        <div className="container">
            
        <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">

            <div className="carousel-item active" data-bs-interval="5000">
                        <h2>Excellent and flexible tool to follow daily activies</h2>
                        <img src="Images/customer.jpg" alt=""/>                
                        <em>John Doe - Oporto</em>  
                    </div>      

                    <div className="carousel-item" data-bs-interval="5000">
                        <h2>Amazing tool that allows me to control either CRM or number of visits</h2>
                        <img src="Images/customer.jpg" alt=""/>                
                        <em>Jason Doe - Lisbon</em>  
                    </div>  

            </div>

        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
        </button>

        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
        </button>

        </div>
        </div>
    </section>
}

export default Testemonials;