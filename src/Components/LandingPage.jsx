import React from 'react'
import HomeSection from './HomeSection'
import Navbar from './Navbar'
import Services from './Services'
import WhyChooseUs from './WhyChooseUs'
import HomeProjectsBanner from './HomeProjectsBanner'
import Footer from './Footer'

const LandingPage = () => {
    return (
        <React.Fragment>
            {/* <div className='px-12'> */}
            {/* <Navbar /> */}
            <HomeSection />
            <Services />
            <WhyChooseUs />
            {/* <HomeProjectsBanner /> */}
            {/* <Footer /> */}
            {/* </div> */}
        </React.Fragment>
    )
}

export default LandingPage
