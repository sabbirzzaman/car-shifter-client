import React from 'react';
import ReviewItem from '../ReviewItem/ReviewItem';
import './Reviews.css';

const Reviews = () => {
    const reviews = [
        {
            id: 1,
            name: 'john Doe',
            message:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, quod ipsum ab in error facilis vel iure fuga',
            rating: 5,
        },
        {
            id: 2,
            name: 'john Doe',
            message:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, quod ipsum ab in error facilis vel iure fuga',
            rating: 5,
        },
        {
            id: 3,
            name: 'john Doe',
            message:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, quod ipsum ab in error facilis vel iure fuga',
            rating: 5,
        },
        {
            id: 4,
            name: 'john Doe',
            message:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, quod ipsum ab in error facilis vel iure fuga',
            rating: 5,
        },
    ];

    return (
        <section className="review-section">
            <div className="overlay">
            <div className="container">
                <div className="reviews-container">
                    <div className="reviews">
                        {reviews.map((review) => (
                            <ReviewItem
                                key={review.id}
                                review={review}
                            ></ReviewItem>
                        ))}
                    </div>
                    <div className='review-title'>
                        <h2>Clients Review</h2>
                    </div>
                </div>
            </div>
            </div>
        </section>
    );
};

export default Reviews;
