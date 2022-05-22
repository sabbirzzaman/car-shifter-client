import { faBars, faX } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { signOut } from 'firebase/auth';
import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useMatch, useNavigate, useResolvedPath } from 'react-router-dom';
import auth from '../../../firebase.init';
import './Header.css';

const Header = () => {
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();

    // get user
    const [user, loading] = useAuthState(auth);


    // active route
    function CustomLink({ children, to, ...props }) {
        let resolved = useResolvedPath(to);
        let match = useMatch({ path: resolved.pathname, end: true });
      
        return (
          <div>
            <Link
              style={{ color: match ? "#e74c3c" : "" }}
              to={to}
              {...props}
            >
              {children}
            </Link>
          </div>
        );
      }

    return (
        <header>
            <div className="container">
                <h3 className="site-logo" onClick={() => navigate('/')}>
                    Car Shifter
                </h3>

                <nav className={!open ? 'navigation' : 'navigation mobile-nav'}>
                    <CustomLink to="/home">Home</CustomLink>
                    <CustomLink to="/about">About</CustomLink>
                    <CustomLink to="/blog">Blog</CustomLink>

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
