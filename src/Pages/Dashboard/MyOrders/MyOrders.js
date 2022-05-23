import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import auth from '../../../firebase.init';
import Loader from '../../Common/Loader/Loader';
import OrdersTable from '../OrdersTable/OrdersTable';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import './MyOrders.css';

const MyOrders = () => {
    // get user information
    const [user] = useAuthState(auth);

    const [orders, setOrders] = useState([]);

    // get user orders data
    const { data } = useQuery('orders', () =>
        axios.get(`http://localhost:5000/orders?email=${user?.email}`)
    );

    // order array
    useEffect(() => {
        setOrders(data?.data);
    }, [data]);

    // loading spinner
    if (!orders) {
        return <Loader height="50vh"></Loader>;
    }

    // cancel order
    const handleItemDelete = (id) => {
        confirmAlert({
            title: 'Confirm Order Cancel',
            message: 'Are you sure you want to cancel this order?',
            buttons: [
                {
                    label: 'Yes',
                    onClick: () => {
                        axios
                            .delete(`http://localhost:5000/order?id=${id}`)
                            .then((data) => {
                                if (data?.data?.deletedCount > 0) {
                                    const updatedOrders = orders.filter(
                                        (order) => order._id !== id
                                    );
                                    setOrders(updatedOrders);
                                }
                            })
                            .catch((err) => {
                                console.log(err);
                            });
                    },
                },
                {
                    label: 'No',
                    onClick: () => '',
                },
            ],
        });
    };

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
                            deleteOrder={handleItemDelete}
                        ></OrdersTable>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default MyOrders;
