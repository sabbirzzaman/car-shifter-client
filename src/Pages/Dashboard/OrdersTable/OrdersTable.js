import React from 'react';
import { useNavigate } from 'react-router-dom';
import './OrdersTable.css';

const OrdersTable = ({ order, deleteOrder }) => {
    const { _id, productName, price, quantity } = order;

    const navigate = useNavigate();

    return (
        <tr>
            <td>{productName}</td>
            <td>{quantity} Pice</td>
            <td>${price}.00</td>
            <td>
                <button
                    style={{ backgroundColor: '#2ecc71' }}
                    className="status"
                >
                    Unpaid
                </button>
            </td>
            <td>
                <button
                    style={{ backgroundColor: '#2ecc71', width: '100%' }}
                    className="pay"
                    onClick={() => navigate(`/payment/${_id}`)}
                >
                    Pay
                </button>
                <button
                    onClick={() => deleteOrder(_id)}
                    style={{ backgroundColor: '#e74c3c', width: '100%' }}
                    className="cancel"
                >
                    Cancel
                </button>
            </td>
        </tr>
    );
};

export default OrdersTable;
