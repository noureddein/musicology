import React from 'react';
import './styles/hero.css'

function Hero() {
    return (
        <div className='heroContainer'>
            <div className='container subtitle d-flex flex-column justify-content-center'>
                <h2>Title Here</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum.
                </p>
                <button className='registerBtn'>REGISTER NOW</button>
            </div>
        </div>
    );
}

export default Hero;