import React, { useEffect } from 'react';
import {
    useCreateUserWithEmailAndPassword,
    useUpdateProfile,
} from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import useToken from '../../../hooks/useToken';
import SocialLogin from '../SocialLogin/SocialLogin';
import './Register.css';

const Register = () => {
    const [createUserWithEmailAndPassword, user, loading, error] =
        useCreateUserWithEmailAndPassword(auth, {
            sendEmailVerification: true,
        });

    const [updateProfile, updating] = useUpdateProfile(auth);

    const location = useLocation();
    const navigate = useNavigate();

    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm();

    const onSubmit = async ({ name, email, password }) => {
        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });
    };

    const from = location.state?.from?.pathname || '/';

    const [token] = useToken(user);

    useEffect(() => {
        if (token) {
            navigate(from, { replace: true });
        }
    }, [token, from, navigate]);

    return (
        <section className="form-section">
            <div className="container">
                <div className="form-title">
                    <h2>Register your account!</h2>
                    <p>
                        Already have an account?{' '}
                        <Link to="/login">Login Now</Link>
                    </p>
                </div>

                <div className="form-container">
                    <form className="form" onSubmit={handleSubmit(onSubmit)}>
                        <div className="field-group">
                            <label htmlFor="name">
                                Name <span className="required">*</span>
                            </label>
                            <input
                                id="name"
                                {...register('name', { required: true })}
                            />
                            <p className="error">
                                {errors.name?.type === 'required' &&
                                    'Name is required'}
                            </p>
                        </div>

                        <div className="field-group">
                            <label htmlFor="email">
                                Email <span className="required">*</span>
                            </label>
                            <input
                                id="email"
                                {...register('email', {
                                    required: true,
                                    pattern: {
                                        value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)+$/,
                                        message: 'Invalid email address',
                                    },
                                })}
                            />
                            <p className="error">
                                {errors.email?.type === 'required' &&
                                    'Email is required'}
                            </p>
                            <p className="error">
                                {errors.email?.type === 'pattern' &&
                                    'Invalid email address'}
                            </p>
                        </div>

                        <div className="field-group">
                            <label htmlFor="password">
                                Password <span className="required">*</span>
                            </label>
                            <input
                                id="password"
                                {...register('password', {
                                    required: true,
                                    minLength: {
                                        value: 6,
                                    },
                                })}
                            />
                            <p className="error">
                                {errors.password?.type === 'required' &&
                                    'Password is required'}
                            </p>
                            <p className="error">
                                {errors.password?.type === 'minLength' &&
                                    'Must be 6 character or longer'}
                            </p>
                        </div>

                        <input className="btn" type="submit" value="Register" />

                        <div className="divider">OR</div>

                        <SocialLogin></SocialLogin>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Register;
