import React from 'react'
import Menu from './Components/menu'
import Banner from './Components/banner'
import Features from './Components/features'
import Testemonials from './Components/testemonials'
import Prices from './Components/prices'
import Footer from './Components/footer'

function Website(props) {
    return <div>
     <Menu />
     <Banner />
     <Features />
     <Testemonials />
     <Prices />
     <Footer />
    </div>
}

export default Website