import React from 'react';
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero-section">
            <div className="overlay">
                <div className="container">
                    <h1>Find the suitable spare parts for your car!</h1>
                    <p>
                        We are restoring a vehicle to it's original form after
                        it's been involved in an accident.
                    </p>
                    <button className="btn">
                        View Products
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Hero;
