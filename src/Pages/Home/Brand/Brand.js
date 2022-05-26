import React from 'react';
import brand1 from '../../../images/brand-1.png';
import brand2 from '../../../images/brand-2.png';
import brand3 from '../../../images/brand-3.png';
import brand4 from '../../../images/brand-4.png';
import brand5 from '../../../images/brand-5.png';
import brand6 from '../../../images/brand-6.png';
import './Brand.css';

const Brand = () => {
    const brands = [brand1, brand2, brand3, brand4, brand5, brand6];

    return (
        <section className="brand-section">
            <div className="container">
                <div className="brands">
                    {brands.map((brand, index) => (
                        <div key={index}><img src={brand} alt="Brand" /></div>
                    ))}
                </div>

                <div className="mega-sale">
                    <div className="sale-1">
                        <h3>Lamps & Lights</h3>
                        <h2>Mega Sale</h2>
                        <p>Start From <span>$450</span></p>

                        <button className="btn">Show Now</button>
                    </div>
                    <div className="sale-2">
                        <h2>Body Parts</h2>
                        <h3>For any vehicle</h3>
                        <p>Coupe, Sedan, Suv, And Many More</p>

                        <button className="btn">Show Now</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Brand;
