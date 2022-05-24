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
import { signOut } from 'firebase/auth';
import toast from 'react-hot-toast';

const MyOrders = () => {
    // get user information
    const [{ email, displayName }] = useAuthState(auth);

    const [orders, setOrders] = useState([]);

    // get user orders data
    const { data, error } = useQuery(['orders', email], () =>
        axios.get(`http://localhost:5000/orders?email=${email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`,
            },
        })
    );

    // order array
    useEffect(() => {
        setOrders(data?.data);
    }, [data]);

    if(error?.response?.status === 401 || error?.response?.status === 403) {
        signOut(auth)
        return toast.error('Login Expired')
    }

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
            {orders.length ? (
                <>
                    <h3>{displayName}'s Orders</h3>
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

export default MyOrders;
