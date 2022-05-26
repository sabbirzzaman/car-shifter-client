import axios from 'axios';
import React from 'react';
import { useQuery } from 'react-query';
import Loader from '../../Common/Loader/Loader';
import ReviewItem from '../ReviewItem/ReviewItem';
import './Reviews.css'

const Reviews = () => {
    const {data, isLoading} = useQuery('reviews', () => axios.get('http://localhost:5000/review', {
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }))

    if(isLoading) {
        return <Loader height="60vh"></Loader>
    }

    const reviewLimit = data.data.slice(0, 6)

    return (
        <section className="review-section">
            <div className="overlay">
                <div className="container">
                    <div className="review-title">
                        <h2>Clients Review</h2>
                    </div>

                    <div className="reviews-container">
                        <div className="reviews">
                            {
                                reviewLimit.map(review => <ReviewItem key={review._id} review={review}></ReviewItem>)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Reviews;
