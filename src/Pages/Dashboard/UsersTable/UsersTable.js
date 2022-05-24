import React from 'react';
import { useNavigate } from 'react-router-dom';
import './UsersTable.css';

const UsersTable = ({ user, index }) => {
    const { email, name, role } = user;

    return (
        <tr>
            <td>{index + 1}</td>
            <td>{name || 'Anonymous'}</td>
            <td>{email}</td>
            <td>{role ? 'Admin' : 'User'}</td>
            <td>
                {!role && (
                    <button
                        style={{
                            backgroundColor: '#2ecc71',
                            width: '100%',
                        }}
                        className="pay"
                    >
                        Make admin
                    </button>
                )}
            </td>
        </tr>
    );
};

export default UsersTable;
