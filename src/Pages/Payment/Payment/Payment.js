import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import axios from 'axios';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loader from '../../Common/Loader/Loader';
import CheckoutForm from '../CheckoutForm/CheckoutForm';
import './Payment.css';

// stripe promises
const stripePromise = loadStripe(`${process.env.STRIPE_PUBLISH_KEY}`);

const Payment = () => {
    const { id } = useParams();

    // get product data
    const { data, isLoading } = useQuery('order', () =>
        axios.get(`http://localhost:5000/orders/${id}`)
    );

    if (isLoading) {
        return <Loader></Loader>;
    }

    const { productName, image, price, quantity } = data.data;

    const totalPrice = parseInt(price) * parseInt(quantity);

    return (
        <section className="payment-section">
            <div className="container">
                <div className="purchase-item">
                    <h3>{productName}</h3>
                    <div className="purchase-image">
                        <img src={image} alt={productName} />
                    </div>
                    <div className="purchase-info">
                        <div className="info">
                            <h5>Price</h5>
                            <h3>${price}.00</h3>
                        </div>
                        <div className="info">
                            <h5>Quantity</h5>
                            <h3>{quantity} Pice</h3>
                        </div>
                        <div className="info">
                            <h5>Total Price</h5>
                            <h3>${totalPrice}.00</h3>
                        </div>
                    </div>
                </div>
                <div className="form-container">
                    <h3>Complete Payment</h3>
                    <Elements stripe={stripePromise}>
                        <CheckoutForm />
                    </Elements>
                </div>
            </div>
        </section>
    );
};

export default Payment;
