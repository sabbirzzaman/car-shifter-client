import {
    faLocationDot,
    faMagnifyingGlass,
    faMoneyCheckDollar,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
                        <div key={index}>
                            <img src={brand} alt="Brand" />
                        </div>
                    ))}
                </div>

                <div className="how-it-works">
                    <div className="works-container">
                        <div className="work-icon">
                            <div className="icon">
                                <FontAwesomeIcon icon={faMagnifyingGlass} />
                            </div>

                            <h5>Choose Parts</h5>
                            <p>Choose the parts you need to buy</p>

                            <div className="icon-divider"></div>
                        </div>
                        <div className="work-icon">
                            <div className="icon">
                                <FontAwesomeIcon icon={faLocationDot} />
                            </div>

                            <h5>Enter Your Address</h5>
                            <p>Give your address and part quantity</p>
                        </div>
                        <div className="work-icon">
                            <div className="icon">
                                <FontAwesomeIcon icon={faMoneyCheckDollar} />
                            </div>

                            <h5>Make payment</h5>
                            <p>Pay with your card for the part</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Brand;
