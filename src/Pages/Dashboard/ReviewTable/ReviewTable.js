import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ReviewTable.css';

const ReviewTable = ({ order, index }) => {
    const { _id, productName, price, transactionId, paid } = order;
    const navigate = useNavigate();

    return (
        <tr>
            <td>{index + 1}</td>
            <td>{productName}</td>
            <td>${price}.00</td>
            <td>{transactionId}</td>
            <td>
                {!paid ? (
                    <>
                        <button
                            style={{
                                backgroundColor: '#2ecc71',
                                width: '100%',
                            }}
                            className="pay"
                            onClick={() => navigate(`/payment/${_id}`)}
                        >
                            Pay
                        </button>
                        <button
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
                            onClick={() =>
                                navigate(`/dashboard/add-a-review/${_id}`)
                            }
                            style={{ backgroundColor: '#2ecc71' }}
                            className="status"
                        >
                            Add A Review
                        </button>
                    </>
                )}
            </td>
        </tr>
    );
};

export default ReviewTable;
