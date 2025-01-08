import React from 'react';
import Sponsors from '../../components/Sponsors/Sponsors';
import Hero from '../../components/Hero/Hero';
// import FeaturedProducts from '../../components/FeaturedProducts/FeaturedProducts';

function Landing() {
    return (
        <>
        <Hero
            title="ALL THINGS CAMERAS"
            subtitle="Capture Life's Moments with Professional Grade Equipment"
        />
        {/* <FeaturedProducts /> */}
        <Sponsors />
        </>
    );
}
    
export default Landing;
    