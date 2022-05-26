import React from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import './OrdersTable.css';

const OrdersTable = ({ order, deleteOrder }) => {
    const { _id, productName, price, quantity, paid, status, transactionId } =
        order;

    const totalPrice = parseInt(price) * parseInt(quantity);

    const handleToast = () => {
        toast((t) => (
            <span className='transaction-id'>
                <p>{transactionId}</p>
                <button className='remove-btn' onClick={() => toast.dismiss(t.id)}>X</button>
            </span>
        ), {
            duration: 10000,
          });
    };

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
                        <button onClick={handleToast} className="action">
                            Details
                        </button>
                    </>
                )}
            </td>
        </tr>
    );
};

export default OrdersTable;
