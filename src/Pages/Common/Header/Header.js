import { faBars, faX } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Header.css';

const Header = () => {
    const navigate = useNavigate();

    const [open, setOpen] = useState(false);

    return (
        <header>
            <div className="container">
                <h3 className='site-logo' onClick={() => navigate('/')}>Car Shifter</h3>

                <nav className={!open ? 'navigation' : 'navigation mobile-nav'}>
                    <Link to="/home">Home</Link>
                    <Link to="#">About</Link>
                    <Link to="#">Blog</Link>
                    <button className='btn'>Login</button>
                </nav>

                <div className="nav-ber">
                    <FontAwesomeIcon
                        onClick={() => setOpen(!open)}
                        icon={!open ? faBars : faX}
                    ></FontAwesomeIcon>
                </div>
            </div>
        </header>
    );
};

export default Header;
