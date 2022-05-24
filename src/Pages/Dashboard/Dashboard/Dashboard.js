import {
    faCartShopping,
    faStar,
    faUser,
    faUsers,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../../firebase.init';
import './Dashboard.css';

const Dashboard = () => {
    const [user] = useAuthState(auth);

    return (
        <section className="dashboard-section">
            <div className="container">
                <div className="dashboard-menu">
                    <Link to="/dashboard/my-orders" className="btn-dashboard">
                        <FontAwesomeIcon
                            icon={faCartShopping}
                        ></FontAwesomeIcon>
                        My Orders
                    </Link>
                    <Link
                        to="/dashboard/add-a-review"
                        className="btn-dashboard"
                    >
                        <FontAwesomeIcon icon={faStar}></FontAwesomeIcon> Add A
                        Review
                    </Link>
                    <Link to="/dashboard/my-profile" className="btn-dashboard">
                        <FontAwesomeIcon icon={faUser}></FontAwesomeIcon> My
                        Profile
                    </Link>
                    <Link
                        to="/dashboard/manage-users"
                        className="btn-dashboard"
                    >
                        <FontAwesomeIcon icon={faUsers}></FontAwesomeIcon>
                        Manage Users
                    </Link>
                </div>

                <div className="dashboard-content">
                    <Outlet></Outlet>
                </div>
            </div>
        </section>
    );
};

export default Dashboard;
