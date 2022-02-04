import React from 'react';
import SectionTitle from '../Common/SectionTitle';
import PricingCards from '../Common/pricingCards';
import './styles/pricing.css';



const paragraph = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. '

function Pricing() {
    return (
        <div className='pricingContainer'>
            <div className="container">
                <SectionTitle title='pricing' paragraph={paragraph} />
                <PricingCards />
            </div>
        </div>

    );
}

export default Pricing;