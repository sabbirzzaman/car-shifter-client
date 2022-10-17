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
            </div>
        </section>
    );
};

export default Brand;
