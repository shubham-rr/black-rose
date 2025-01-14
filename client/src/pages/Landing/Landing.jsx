import React from 'react';
import Sponsors from './components/Sponsors/Sponsors';
import Hero from './components/Hero/Hero';
import FeaturedProducts from './components/FeaturedProducts/FeaturedProducts';
import TopBrands from './components/TopBrands/TopBrands';
import { products, sections } from '../../data/products';

function Landing() {
    return (
        <>
            <Hero/>
            {Object.entries(sections).map(([key, section]) => (
                <FeaturedProducts 
                    key={key}
                    title={section.title} 
                    products={products.filter(section.filter)}
                    viewAllLink={section.viewAllLink} 
                />
            ))}
            <TopBrands />
            <Sponsors />
        </>
    );
}
    
export default Landing;
    