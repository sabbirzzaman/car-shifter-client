import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useQuery } from 'react-query';
import { useNavigate, useParams } from 'react-router-dom';
import Loader from '../../Common/Loader/Loader';
import './ReviewForm.css';

const ReviewForm = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const { data, isLoading } = useQuery('order', () =>
        axios.get(`http://localhost:5000/orders/${id}`)
    );

    const { register, handleSubmit, reset } = useForm();

    if (isLoading) {
        return <Loader height="50vh"></Loader>;
    }

    const { transactionId ,productId, productName, email } = data.data;

    const onSubmit = (data) => {
        const review = {
            productId,
            transactionId,
            productName,
            email,
            ...data,
        };

        axios.post('http://localhost:5000/reviews', review, {
                headers: {
                    'content-type': 'application/json',
                },
            })
            .then((result) => {
                if (result?.data?.acknowledged) {
                    reset();
                    navigate('/dashboard/add-a-review')
                    toast.success('Review Added Successfully');
                }
            });
    };

    return (
        <div className='review-form-container'>
            <h3>Add Review for - {productName}</h3>

            <div className="review-form">
                <form className="form" onSubmit={handleSubmit(onSubmit)}>
                    <div className="field-group">
                        <label htmlFor="Rating">
                            Rating <span className="required">*</span>
                        </label>
                        <input
                            id="rating"
                            type="number"
                            defaultValue="5"
                            min="1"
                            max="5"
                            {...register('rating')}
                            required
                        />
                    </div>

                    <div className="field-group">
                        <label htmlFor="message">
                            Review Message <span className="required">*</span>
                        </label>
                        <textarea
                            id="message"
                            {...register('message')}
                            cols="30"
                            rows="10"
                            required
                        ></textarea>
                    </div>

                    <input className="btn" type="submit" value="Add Review" />
                </form>
            </div>
        </div>
    );
};

export default ReviewForm;
