import React from 'react';
import './Login.css';
import { useForm } from 'react-hook-form';
import SocialLogin from '../SocialLogin/SocialLogin';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const Login = () => {
    const [signInWithEmailAndPassword, user, loading, error] =
        useSignInWithEmailAndPassword(auth);

    const location = useLocation();
    const navigate = useNavigate();

    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm();

    const onSubmit = ({ email, password }) => {
        signInWithEmailAndPassword(email, password);
    };

    const from = location.state?.from?.pathname || "/";

    if (user) {
        navigate(from, { replace: true });
    }

    return (
        <section className="form-section">
            <div className="container">
                <div className="form-title">
                    <h2>Login to your account!</h2>
                    <p>
                        New to Car Shifter?{' '}
                        <Link to="/register">Register Now</Link>
                    </p>
                </div>

                <div className="form-container">
                    <form className="form" onSubmit={handleSubmit(onSubmit)}>
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

                        <input className="btn" type="submit" />

                        <p>
                            <Link to="/forget-password">Forget Password?</Link>
                        </p>

                        <div className="divider">OR</div>

                        <SocialLogin></SocialLogin>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Login;
