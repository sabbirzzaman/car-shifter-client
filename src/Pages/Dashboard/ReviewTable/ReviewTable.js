import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ReviewTable.css';

const ReviewTable = ({ order, index }) => {
    const { _id, productName, price, transactionId } = order;
    const navigate = useNavigate();

    return (
        <tr>
            <td>{index + 1}</td>
            <td>{productName}</td>
            <td>${price}.00</td>
            <td>{transactionId}</td>
            <td>
                <button
                    onClick={() => navigate(`/dashboard/add-a-review/${_id}`)}
                    className="status"
                >
                    Add A Review
                </button>
            </td>
        </tr>
    );
};

export default ReviewTable;
