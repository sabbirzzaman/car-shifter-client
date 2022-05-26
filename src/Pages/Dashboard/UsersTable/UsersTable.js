import axios from 'axios';
import React from 'react';
import { confirmAlert } from 'react-confirm-alert';
import toast from 'react-hot-toast';
import './UsersTable.css';

const UsersTable = ({ user, index, refetch }) => {
    const { email, name, role } = user;

    const handleMakeAdmin = () => {
        confirmAlert({
            title: `Confirm Make Admin.`,
            message: 'Are you sure you want to make an admin?',
            buttons: [
                {
                    label: 'Yes',
                    onClick: () => {
                        axios
                            .put(
                                `http://localhost:5000/users/admin/${email}`,
                                {},
                                {
                                    headers: {
                                        authorization: `Bearer ${localStorage.getItem(
                                            'accessToken'
                                        )}`,
                                    },
                                }
                            )
                            .then((data) => {
                                if (data?.data?.acknowledged) {
                                    toast.success(
                                        'Successfully admin assigned.'
                                    );
                                    refetch()
                                }
                            }).catch(err => {
                                if(err.response.status === 403) {
                                    toast.error('Only admins can make an admin')
                                }
                            })
                    },
                },
                {
                    label: 'No',
                    onClick: () => '',
                },
            ],
        });
    };

    return (
        <tr>
            <td>{index + 1}</td>
            <td>{name || 'Anonymous'}</td>
            <td>{email}</td>
            <td>{role ? 'Admin' : 'User'}</td>
            <td>
                {!role && (
                    <button
                        className="action"
                        onClick={handleMakeAdmin}
                    >
                        Make admin
                    </button>
                )}
            </td>
        </tr>
    );
};

export default UsersTable;
