import React from 'react';
import userAvatar from '../../../images/user.png';

const User = ({ user, setProfileOpen, profileOpen }) => {
    return (
        <div className="user-menu" onClick={() => setProfileOpen(!profileOpen)}>
            <h5>{user.displayName}</h5>
            <img src={userAvatar} alt="User" />
        </div>
    );
};

export default User;
