import axios from 'axios';
import React from 'react';
import { useQuery } from 'react-query';
import { confirmAlert } from 'react-confirm-alert';
import Loader from '../../Common/Loader/Loader';
import ManageOrderTable from '../ManageOrderTable/ManageOrderTable';
import './ManageOrders.css';

const ManageOrders = () => {
    // get orders data
    const { data, isLoading, refetch } = useQuery('allOrders', () =>
        axios.get('http://localhost:5000/order', {
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`,
            },
        })
    );

    // loading spinner
    if (isLoading) {
        return <Loader height="50vh"></Loader>;
    }

    const allOrders = data.data;

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
                                    refetch();
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
                    {allOrders.map((order, index) => (
                        <ManageOrderTable
                            key={order._id}
                            order={order}
                            index={index}
                            deleteOrder={handleItemDelete}
                        ></ManageOrderTable>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ManageOrders;
