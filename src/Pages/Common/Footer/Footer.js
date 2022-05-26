import { faEnvelope, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-top">
                <div className="container">
                    <div className="column col-1">
                        <h3 className="site-logo">Car Shifter</h3>

                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit. Quae pariatur consequuntur dolorem esse
                            maxime, dicta vel illo provident deleniti omnis nemo
                            blanditiis ut.
                        </p>
                    </div>

                    <div className="column col-2">
                        <h4>Useful Links</h4>

                        <Link to={'/'}>Home</Link>
                        <Link to={'/my-portfolio'}>Portfolio</Link>
                        <Link to={'/blog'}>Blog</Link>
                        <Link to={'/dashboard'}>Dashboard</Link>
                    </div>

                    <div className="column col-3">
                        <h4>Contact Us</h4>

                        <p><FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon> contect@car-shifter.com</p>
                        <p><FontAwesomeIcon icon={faLocationDot}></FontAwesomeIcon> Satkhira, Bangladesh</p>
                        <p><FontAwesomeIcon icon={faPhone}></FontAwesomeIcon> +012 3456 789</p>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>Car Shifter &copy; 2022 All Right Reserved</p>
            </div>
        </footer>
    );
};

export default Footer;
