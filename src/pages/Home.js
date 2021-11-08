import React from 'react'
import AppionmentBanner from '../components/Home/AppionmentBanner'
import Banner from '../components/Home/Banner'
import Services from '../components/Home/Services'
import Navbar from './shared/Navbar'

const Home = () => {
    return (
        <div>
            <Navbar /> 
            <Banner />
            <Services />
            <AppionmentBanner />
        </div>
    )
}

export default Home
