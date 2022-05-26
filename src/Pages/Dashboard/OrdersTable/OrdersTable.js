import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './OrdersTable.css';

const OrdersTable = ({ order, deleteOrder }) => {
    const [modal, setModal] = useState(false);

    const { _id, productName, price, quantity, paid, status, transactionId } = order;

    const totalPrice = parseInt(price) * parseInt(quantity);

    const navigate = useNavigate();

    return (
        <tr>
            <td>{productName}</td>
            <td>{quantity} Pice</td>
            <td>${totalPrice}.00</td>
            <td>
                {!paid ? (
                    <p>Unpaid</p>
                ) : (
                    <p>{status ? 'Shipped' : 'Pending'}</p>
                )}
            </td>
            <td>
                {!paid ? (
                    <>
                        <button
                            className="action"
                            onClick={() => navigate(`/payment/${_id}`)}
                        >
                            Pay
                        </button>
                        <button
                            onClick={() => deleteOrder(_id)}
                            className="cancel"
                        >
                            Cancel
                        </button>
                    </>
                ) : (
                    <>
                            <button
                                onClick={() => setModal(!modal)}
                                className="action"
                            >
                                Details
                            </button>
                    </>
                )}
            </td>
        </tr>
    );
};

export default OrdersTable;
