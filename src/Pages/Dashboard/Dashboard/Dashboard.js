import { faCartShopping, faStar, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import './Dashboard.css';

const Dashboard = () => {
    const [user] = useAuthState(auth);

    return (
        <section className="dashboard-section">
            <div className="container">
                <div className="dashboard-menu">
                    <Link to="" className="btn-dashboard">
                        <FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon> My Orders
                    </Link>
                    <Link to="" className="btn-dashboard">
                        <FontAwesomeIcon icon={faStar}></FontAwesomeIcon> Add A
                        Review
                    </Link>
                    <Link to="" className="btn-dashboard">
                        <FontAwesomeIcon icon={faUser}></FontAwesomeIcon> My
                        Profile
                    </Link>
                </div>

                <div className="dashboard-content">
                    <h3>Hello, {user.displayName}</h3>
                </div>
            </div>
        </section>
    );
};

export default Dashboard;
