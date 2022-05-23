import React from 'react';
import './OrdersTable.css';

const OrdersTable = ({ order }) => {
    const { productName, price, quantity } = order;

    console.log(order)
    return (
        <tr>
            <td>{productName}</td>
            <td>{quantity} Pice</td>
            <td>${price}.00</td>
            <td><button style={{backgroundColor: '#2ecc71'}} className='status'>Unpaid</button></td>
            <td><button style={{backgroundColor: '#e74c3c'}} className='cancel'>Cancel</button></td>
        </tr>
    );
};

export default OrdersTable;
