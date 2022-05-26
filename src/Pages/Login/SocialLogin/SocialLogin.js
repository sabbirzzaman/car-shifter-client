import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect } from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import useToken from '../../../hooks/useToken';
import './SocialLogin.css';

const SocialLogin = () => {
    const [signInWithGoogle, user] = useSignInWithGoogle(auth);

    const navigate = useNavigate();
    const location = useLocation();

    const [token] = useToken(user);

    const from = location.state?.from?.pathname || '/';

    useEffect(() => {
        if (token) {
            navigate(from, { replace: true });
        }
    }, [token, from, navigate]);

    return (
        <div className="social-login">
            <h4>Continue with</h4>
            <button onClick={() => signInWithGoogle()} className="social-btn">
                <FontAwesomeIcon icon={faGoogle}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default SocialLogin;
