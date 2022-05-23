import axios from 'axios';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import auth from '../../../firebase.init';
import Loader from '../../Common/Loader/Loader';
import OrdersTable from '../OrdersTable/OrdersTable';
import './MyOrders.css';

const MyOrders = () => {
    const [user] = useAuthState(auth);

    // get user orders data
    const { data, isLoading } = useQuery('orders', () =>
        axios.get(`http://localhost:5000/orders?email=${user?.email}`)
    );

    if (isLoading) {
        return <Loader height="50vh"></Loader>;
    }

    const orders = data.data;

    return (
        <div className="order-container">
            <h3>{user.displayName}'s Orders</h3>

            <table>
                <thead>
                    <tr>
                        <th>Product Name</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {orders.map((order) => (
                        <OrdersTable
                            key={order._id}
                            order={order}
                        ></OrdersTable>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default MyOrders;
