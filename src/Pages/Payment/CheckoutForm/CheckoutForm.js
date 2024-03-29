import axios from "axios";
import React, { useEffect, useState } from "react";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useNavigate } from "react-router-dom";
import "./CheckoutForm.css";
import toast from "react-hot-toast";

const CheckoutForm = ({ price, order }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [clientSecret, setClientSecret] = useState("");

  const navigate = useNavigate();

  // user info
  const { _id, name, email } = order;

  useEffect(() => {
    axios
      .post(
        "https://white-rabbit-tutu.cyclic.app/create-payment-intent",
        { price },
        {
          headers: {
            "content-type": "application/json",
          },
        }
      )
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

    await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    // confirm payment
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
      console.log(intentError);
      toast.error(intentError.message);
    } else {
      const payment = {
        orderId: _id,
        transactionId: paymentIntent.id,
      };

      axios
        .patch(`https://white-rabbit-tutu.cyclic.app/orders/${_id}`, payment, {
          headers: {
            "content-type": "application/json",
          },
        })
        .then((data) => {
          if (data?.data?.acknowledged) {
            navigate("/");
            toast.success("Payment Successful!");
          }
        });
    }
  };

  return (
    <form className="payment-form" onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: "16px",
              color: "#424770",
              "::placeholder": {
                color: "#aab7c4",
              },
            },
            invalid: {
              color: "#9e2146",
            },
          },
        }}
      />
      <button
        className="btn pay-btn"
        type="submit"
        disabled={!stripe || !clientSecret}
      >
        Pay Now
      </button>
    </form>
  );
};

export default CheckoutForm;
