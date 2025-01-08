import React from 'react';
import Sponsors from '../../components/Sponsors/Sponsors';
import Hero from '../../components/Hero/Hero';
import ProductSection from '../../components/ProductSection/ProductSection';
import { products, sections } from '../../data/products';

function Landing() {
    return (
        <>
            <Hero/>
            {Object.entries(sections).map(([key, section]) => (
                <ProductSection 
                    key={key}
                    title={section.title} 
                    products={products.filter(section.filter)}
                    viewAllLink={section.viewAllLink} 
                />
            ))}
            <Sponsors />
        </>
    );
}
    
export default Landing;
    