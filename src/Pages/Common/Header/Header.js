import { faBars, faX } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { signOut } from 'firebase/auth';
import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import './Header.css';

const Header = () => {
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();

    // get user
    const [user, loading] = useAuthState(auth);

    return (
        <header>
            <div className="container">
                <h3 className="site-logo" onClick={() => navigate('/')}>
                    Car Shifter
                </h3>

                <nav className={!open ? 'navigation' : 'navigation mobile-nav'}>
                    <Link to="/home">Home</Link>
                    <Link to="#">About</Link>
                    <Link to="#">Blog</Link>

                    {user ? (
                        <button onClick={() => signOut(auth)} className="btn">
                            Sign Out
                        </button>
                    ) : (
                        <button
                            onClick={() => navigate('/login')}
                            className="btn"
                        >
                            Login
                        </button>
                    )}
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
