import React from 'react';
import './Sale.css';

const Sale = () => {
    return (
        <section className="sale-section">
            <div className="overlay">
                <div className="container">
                    <div className="sale-content">
                        <h2>30% off</h2>
                        <h3>Under the hood sale</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Quibusdam, debitis.
                        </p>
                        <button className="btn">Shop Now</button>
                    </div>
                    <div></div>
                </div>
            </div>
        </section>
    );
};

export default Sale;
