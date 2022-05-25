import React from 'react';
import { useQuery } from 'react-query';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import './MyProfile.css';
import axios from 'axios';
import Loader from '../../Common/Loader/Loader';
import userAvatar from '../../../images/user.png';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

const MyProfile = () => {
    const [user] = useAuthState(auth);
    const { register, handleSubmit } = useForm();

    // get user orders data
    const { data: users, isLoading } = useQuery('user', () =>
        axios.get(`http://localhost:5000/user/${user?.email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`,
            },
        })
    );

    if (isLoading) {
        return <Loader height="50vh"></Loader>;
    }

    const { email, name, address, education, linkedin, phone } = users.data;

    const onSubmit = (data) => {
        axios
            .put(`http://localhost:5000/users/${email}`, data, {
                headers: {
                    'content-type': 'application/json',
                },
            })
            .then((result) => {
                if(result?.data?.result.acknowledged) {
                    toast.success('Profile Updated')
                }
            });
    };

    return (
        <div className="profile-section">
            <h3>{name}'s Profile</h3>

            <div className="my-profile">
                <div className="profile-image">
                    <img src={userAvatar} alt="User"></img>
                </div>

                <div className="profile-info">
                    <h4>Edit Profile Details</h4>

                    <form className="form" onSubmit={handleSubmit(onSubmit)}>
                        <div className="field-group">
                            <input
                                placeholder="Your Name"
                                defaultValue={name}
                                {...register('name')}
                                readOnly
                            />
                        </div>

                        <div className="field-group">
                            <input
                                placeholder="Your Email"
                                defaultValue={email}
                                {...register('email')}
                                readOnly
                            />
                        </div>

                        <div className="field-group">
                            <input
                                placeholder="Your Phone"
                                defaultValue={phone}
                                {...register('phone')}
                            />
                        </div>

                        <div className="field-group">
                            <input
                                placeholder="Your Address"
                                defaultValue={address}
                                {...register('address')}
                            />
                        </div>

                        <div className="field-group">
                            <input
                                placeholder="Current Education Status"
                                defaultValue={education}
                                {...register('education')}
                            />
                        </div>

                        <div className="field-group">
                            <input
                                placeholder="Linkedin"
                                defaultValue={linkedin}
                                {...register('linkedin')}
                            />
                        </div>

                        <input
                            className="btn"
                            type="submit"
                            value="Update Profile"
                        />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default MyProfile;
