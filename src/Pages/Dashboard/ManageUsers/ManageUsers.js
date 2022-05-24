import axios from 'axios';
import React from 'react';
import { useQuery } from 'react-query';
import Loader from '../../Common/Loader/Loader';
import UsersTable from '../UsersTable/UsersTable';
import './ManageUsers.css';

const ManageUsers = () => {
    // get user orders data
    const { data: users, isLoading, refetch } = useQuery('orders', () =>
        axios.get(`http://localhost:5000/users`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`,
            },
        })
    );

    if (isLoading) {
        return <Loader height="50vh"></Loader>;
    }

    const allUsers = users?.data;

    return (
        <div className="order-container">
            <h3>Add Reviews</h3>
            <table className="review-table">
                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Role</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {allUsers.map((user, index) => (
                        <UsersTable
                            key={user._id}
                            user={user}
                            index={index}
                            refetch={refetch}
                        ></UsersTable>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ManageUsers;
