import React from 'react';
import './Login.css';
import { useForm } from 'react-hook-form';
import SocialLogin from '../SocialLogin/SocialLogin';
import { Link } from 'react-router-dom';

const Login = () => {
    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <section className="login">
            <div className="container">
                <div className="form-title">
                    <h2>Login to your account!</h2>
                    <p>Now to Car Shifter? <Link to=''>Register Now!</Link></p>
                </div>

                <div className="form-container">
                    <form className="form" onSubmit={handleSubmit(onSubmit)}>
                        <div className="field-group">
                            <label htmlFor="email">
                                Email <span className="required">*</span>
                            </label>
                            <input
                                id="email"
                                {...register('email', { required: true })}
                            />
                            {errors.email?.type === 'required' &&
                                'Email is required'}
                        </div>

                        <div className="field-group">
                            <label htmlFor="password">
                                Password <span className="required">*</span>
                            </label>
                            <input
                                id="password"
                                {...register('password', { required: true })}
                            />
                            {errors.email?.type === 'required' &&
                                'Password is required'}
                        </div>

                        <input className="btn" type="submit" />

                        <p><Link to=''>Forget Password?</Link></p>

                        <div className="divider">OR</div>

                           <SocialLogin></SocialLogin>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Login;
