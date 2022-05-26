import {
    faCartShopping,
    faStar,
    faUser,
    faUsers,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet, useMatch, useResolvedPath } from 'react-router-dom';
import auth from '../../../firebase.init';
import useAdmin from '../../../hooks/useAdmin';
import './Dashboard.css';

const Dashboard = () => {
    const [user] = useAuthState(auth);

    const [admin] = useAdmin(user);

    // active route
    function CustomLink({ children, to, ...props }) {
        let resolved = useResolvedPath(to);
        let match = useMatch({ path: resolved.pathname, end: true });

        return (
            <div>
                <Link
                    style={{ backgroundColor: match ? '#e74c3c' : '', color: match ? '#fff' : '' }}
                    to={to}
                    {...props}
                >
                    {children}
                </Link>
            </div>
        );
    }

    return (
        <section className="dashboard-section">
            <div className="container">
                <div className="dashboard-menu">
                    {!admin && (
                        <>
                            <CustomLink
                                to="/dashboard/my-orders"
                                className="btn-dashboard"
                            >
                                <FontAwesomeIcon
                                    icon={faCartShopping}
                                ></FontAwesomeIcon>
                                My Orders
                            </CustomLink>
                            <CustomLink
                                to="/dashboard/add-a-review"
                                className="btn-dashboard"
                            >
                                <FontAwesomeIcon
                                    icon={faStar}
                                ></FontAwesomeIcon>{' '}
                                Add A Review
                            </CustomLink>
                        </>
                    )}
                    <CustomLink to="/dashboard/my-profile" className="btn-dashboard">
                        <FontAwesomeIcon icon={faUser}></FontAwesomeIcon> My
                        Profile
                    </CustomLink>
                    {admin && (
                        <>
                            <CustomLink
                                to="/dashboard/manage-users"
                                className="btn-dashboard"
                            >
                                <FontAwesomeIcon
                                    icon={faUsers}
                                ></FontAwesomeIcon>
                                Manage Users
                            </CustomLink>
                            <CustomLink
                                to="/dashboard/manage-orders"
                                className="btn-dashboard"
                            >
                                <FontAwesomeIcon
                                    icon={faUsers}
                                ></FontAwesomeIcon>
                                Manage Orders
                            </CustomLink>
                            <CustomLink
                                to="/dashboard/add-products"
                                className="btn-dashboard"
                            >
                                <FontAwesomeIcon
                                    icon={faUsers}
                                ></FontAwesomeIcon>
                                Add Products
                            </CustomLink>
                            <CustomLink
                                to="/dashboard/manage-products"
                                className="btn-dashboard"
                            >
                                <FontAwesomeIcon
                                    icon={faUsers}
                                ></FontAwesomeIcon>
                                Manage Products
                            </CustomLink>
                        </>
                    )}
                </div>

                <div className="dashboard-content">
                    <div className="dashboard-table">
                    <Outlet></Outlet>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Dashboard;
