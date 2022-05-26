import axios from 'axios';
import React from 'react';
import { useQuery } from 'react-query';
import Loader from '../../Common/Loader/Loader';
import ReviewItem from '../ReviewItem/ReviewItem';
import './Reviews.css'

const Reviews = () => {
    const {data, isLoading} = useQuery('reviews', () => axios.get('https://car-shifter.herokuapp.com/review'))

    if(isLoading) {
        return <Loader height="60vh"></Loader>
    }

    const reviews = data.data;

    // reversed data
    const reversedData = [...reviews].reverse();

    // get limited data
    const reviewLimit = reversedData.slice(0, 6)

    return (
        <section className="review-section">
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
        </section>
    );
};

export default Reviews;
