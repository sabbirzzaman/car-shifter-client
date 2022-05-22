import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import './ForgetPassword.css'

const ForgetPassword = () => {
    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <section className="form-section">
            <div className="container">
                <div className="form-title">
                    <h2>Reset Password!</h2>
                    <p>Enter the email address you used when you joined and we'll send you instructions to reset your password.</p>
                    <p className='form-toggle'>A new member? <Link to='/register'>Register Now</Link></p>
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

                        <input className="btn" type="submit" />
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ForgetPassword;