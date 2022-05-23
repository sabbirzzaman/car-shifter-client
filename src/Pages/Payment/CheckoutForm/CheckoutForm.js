import React, { useEffect, useState } from 'react';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import './CheckoutForm.css';
import axios from 'axios';
import Loader from '../../Common/Loader/Loader';

const CheckoutForm = ({ price, order }) => {
    const stripe = useStripe();
    const elements = useElements();
    const [clientSecret, setClientSecret] = useState('');
    const [transactionId, setTransactionId] = useState('');
    const [processing, setProcessing] = useState(false);

    // user info
    const { _id, name, email } = order;

    useEffect(() => {
        axios.post('http://localhost:5000/create-payment-intent', {price}, {
                headers: {
                    'content-type': 'application/json',
                },
            })
            .then((data) => {
                if (data?.data?.clientSecret) {
                    setClientSecret(data?.data?.clientSecret);
                }
            });
    }, [price]);

    // payment form
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            console.log(error.message);
        }

        // confirm payment 
        setProcessing(true);

        const { paymentIntent, error: intentError } =
            await stripe.confirmCardPayment(clientSecret, {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: name,
                        email: email,
                    },
                },
            });

        if (intentError) {
            console.log(intentError.message);
            setProcessing(false);
        } else {
            console.log(paymentIntent);
            setTransactionId(paymentIntent.id);

            const payment = {
                orderId: _id,
                transactionId: paymentIntent.id,
            };

            axios
                .patch(`http://localhost:5000/orders/${_id}`, payment, {
                    headers: {
                        'content-type': 'application/json',
                    },
                })
                .then((data) => {
                    setProcessing(false);
                    console.log(data);
                });
        }
    };

    if(processing) {
        return <Loader height="fit-content"></Loader>
    }

    return (
        <form className="payment-form" onSubmit={handleSubmit}>
            <CardElement
                options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#424770',
                            '::placeholder': {
                                color: '#aab7c4',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}
            />
            <button
                className="btn pay-btn"
                type="submit"
                disabled={!stripe || !clientSecret}
            >
                Pay
            </button>
        </form>
    );
};

export default CheckoutForm;
