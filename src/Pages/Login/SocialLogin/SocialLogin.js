import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './SocialLogin.css'

const SocialLogin = () => {
    return (
        <div className="social-login">
            <h4>Continue with</h4>
            <button className='social-btn'>
                <FontAwesomeIcon icon={faGoogle}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default SocialLogin;
