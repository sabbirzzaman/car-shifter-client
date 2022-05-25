import React from 'react';
import { useNavigate } from 'react-router-dom';
import './OrdersTable.css';

const OrdersTable = ({ order, deleteOrder }) => {
    const { _id, productName, price, quantity, paid } = order;

    const totalPrice = parseInt(price) * parseInt(quantity)

    const navigate = useNavigate();

    return (
        <tr>
            <td>{productName}</td>
            <td>{quantity} Pice</td>
            <td>${totalPrice}.00</td>
            <td>
                {!paid ? (
                    <button
                        style={{ backgroundColor: '#e74c3c' }}
                        className="status"
                    >
                        Unpaid
                    </button>
                ) : (
                    <button
                        style={{ backgroundColor: '#2ecc71' }}
                        className="status"
                    >
                        Paid
                    </button>
                )}
            </td>
            <td>
                {!paid ? (
                    <>
                        <button
                            style={{
                                backgroundColor: '#2ecc71',
                                width: '100%',
                            }}
                            className="action"
                            onClick={() => navigate(`/payment/${_id}`)}
                        >
                            Pay
                        </button>
                        <button
                            onClick={() => deleteOrder(_id)}
                            style={{
                                backgroundColor: '#e74c3c',
                                width: '100%',
                            }}
                            className="cancel"
                        >
                            Cancel
                        </button>
                    </>
                ) : (
                    <>
                        <button
                            style={{ backgroundColor: '#2ecc71' }}
                            className="status"
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
