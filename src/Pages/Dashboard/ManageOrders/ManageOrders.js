import axios from 'axios';
import React from 'react';
import { useQuery } from 'react-query';
import Loader from '../../Common/Loader/Loader';
import ManageOrderTable from '../ManageOrderTable/ManageOrderTable';
import './ManageOrders.css';

const ManageOrders = () => {
    const { data, isLoading } = useQuery('allOrders', () =>
        axios.get('http://localhost:5000/order', {
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`,
            },
        })
    );

    if (isLoading) {
        return <Loader height="50vh"></Loader>;
    }

    const orders = data.data;

    return (
        <div className="order-container">
            <h3>Manage Orders</h3>
                    <table>
                        <thead>
                            <tr>
                                <th>Product Name</th>
                                <th>Quantity</th>
                                <th>Total Price</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {orders.map((order, index) => (
                                <ManageOrderTable
                                    key={order._id}
                                    order={order}
                                    index={index}
                                ></ManageOrderTable>
                            ))}
                        </tbody>
                    </table>
        </div>
    );
};

export default ManageOrders;
