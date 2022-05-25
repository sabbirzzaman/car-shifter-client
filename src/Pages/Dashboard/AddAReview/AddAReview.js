import axios from 'axios';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import auth from '../../../firebase.init';
import Loader from '../../Common/Loader/Loader';
import ReviewTable from '../ReviewTable/ReviewTable';
import './AddAReview.css'

const AddAReview = () => {
    // get user information
    const [user] = useAuthState(auth);

    // get user orders data
    const { data, isLoading } = useQuery('orders', () =>
        axios.get(`http://localhost:5000/orders?email=${user?.email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
    );

    if(isLoading) {
        return <Loader height="50vh"></Loader>
    }

    const orders = data?.data;

    const paidOrders = orders.filter(order => order.paid === true)

    return (
        <div className="table-container">
            {orders.length ? (
                <>
                    <h3>Add Reviews</h3>
                    <table className='review-table'>
                        <thead>
                            <tr>
                                <th></th>
                                <th>Product Name</th>
                                <th>Price</th>
                                <th>Transaction Id</th>
                                <th>Add Review</th>
                            </tr>
                        </thead>
                        <tbody>
                            {paidOrders.map((order, index) => (
                                <ReviewTable
                                    key={order._id}
                                    order={order}
                                    index={index}
                                ></ReviewTable>
                            ))}
                        </tbody>
                    </table>
                </>
            ) : (
                <>
                    <h3>You don't placed any orders yet!</h3>
                    <button className="btn">Order Now</button>
                </>
            )}
        </div>
    );
};

export default AddAReview;