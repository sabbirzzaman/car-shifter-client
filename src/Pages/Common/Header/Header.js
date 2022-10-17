import { faBars, faX } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { signOut } from 'firebase/auth';
import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useMatch, useNavigate, useResolvedPath } from 'react-router-dom';
import auth from '../../../firebase.init';
import userAvatar from '../../../images/user.png';
import './Header.css';

const Header = () => {
    const [profileOpen, setProfileOpen] = useState(false);
    const [open, setOpen] = useState(false);

    // get user
    const [user] = useAuthState(auth);

    // use navigate
    const navigate = useNavigate();

    // active route
    function CustomLink({ children, to, ...props }) {
        let resolved = useResolvedPath(to);
        let match = useMatch({ path: resolved.pathname, end: true });

        return (
            <div>
                <Link
                    style={{ color: match ? '#8a79f0' : '' }}
                    to={to}
                    {...props}
                >
                    {children}
                </Link>
            </div>
        );
    }

    // sign out handler
    const handleSignOut = () => {
        localStorage.removeItem('accessToken');
        signOut(auth);
        setProfileOpen(false);
    };

    return (
        <header>
            <div className="container">
                <h3 className="site-logo" onClick={() => navigate('/')}>
                    Car Shifter
                </h3>

                <nav className={!open ? 'navigation' : 'navigation mobile-nav'}>
                    <CustomLink to="/home">Home</CustomLink>
                    <CustomLink to="/my-portfolio">My Portfolio</CustomLink>
                    <CustomLink to="/blog">Blog</CustomLink>
                    {user && <CustomLink to="/dashboard">Dashboard</CustomLink>}

                    <div className={`header-divider ${user && 'hidden'}`}></div>

                    {!user && (
                        <button
                            onClick={() => navigate('/login')}
                            className="btn login-btn"
                        >
                            Login
                        </button>
                    )}
                </nav>

                {user && (
                    <div className="profile hide-mobile">
                        <div
                            className="user-menu"
                            onClick={() => setProfileOpen(!profileOpen)}
                        >
                            <h5>{user.displayName}</h5>
                            <img src={userAvatar} alt="User" />
                        </div>

                        {profileOpen && (
                            <div className="profile-nav">
                                <button
                                    onClick={() => navigate('/dashboard')}
                                    className="menu-btn"
                                >
                                    Dashboard
                                </button>
                                <button
                                    onClick={handleSignOut}
                                    className="menu-btn"
                                >
                                    Sign Out
                                </button>
                            </div>
                        )}
                    </div>
                )}

                <div className="nav-ber">
                    <FontAwesomeIcon
                        onClick={() => setOpen(!open)}
                        icon={!open ? faBars : faX}
                    ></FontAwesomeIcon>

                    {user && (
                        <div className="profile hide-desktop">
                            <img
                                onClick={() => setProfileOpen(!profileOpen)}
                                src={userAvatar}
                                alt="User"
                            />

                            {profileOpen && (
                                <div className="profile-nav">
                                    <button
                                        onClick={() => navigate('/dashboard')}
                                        className="menu-btn"
                                    >
                                        Dashboard
                                    </button>
                                    <button
                                        onClick={handleSignOut}
                                        className="menu-btn"
                                    >
                                        Sign Out
                                    </button>
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
};

export default Header;
