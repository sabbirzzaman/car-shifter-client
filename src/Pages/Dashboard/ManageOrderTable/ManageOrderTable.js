import React from 'react';
import './ManageOrderTable.css';

const ManageOrderTable = ({ order, deleteOrder, changeStatus }) => {
    const { _id, productName, price, quantity, paid, status } = order;

    const totalPrice = parseInt(price) * parseInt(quantity);

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
                        {status ? 'Shipped' : 'Pending'}
                    </button>
                )}
            </td>
            <td>
                {!paid ? (
                    <button
                        style={{
                            backgroundColor: '#e74c3c',
                            width: '100%',
                        }}
                        className="cancel"
                        onClick={() => deleteOrder(_id)}
                    >
                        Cancel
                    </button>
                ) : (
                    <>
                        {!status ? (
                            <button
                                style={{ backgroundColor: '#2ecc71' }}
                                className="status"
                                onClick={() => changeStatus(_id)}
                            >
                                Approve
                            </button>
                        ) : 'Completed'}
                    </>
                )}
            </td>
        </tr>
    );
};

export default ManageOrderTable;
