import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './ReviewItem.css'

const ReviewItem = ({review}) => {
    const {name, rating, message} = review;

    return (
        <div className='review-item'>
            <p>{message}</p>
            <h5>{name}</h5>
            <h5 className='rating'><FontAwesomeIcon icon={faStar}></FontAwesomeIcon>{rating}</h5>
        </div>
    );
};

export default ReviewItem;