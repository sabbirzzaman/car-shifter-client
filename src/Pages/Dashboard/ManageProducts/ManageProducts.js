import axios from 'axios';
import React from 'react';
import { useQuery } from 'react-query';
import ProductsTable from '../ProductsTable/ProductsTable';
import './ManageProducts.css';

const ManageProducts = () => {
    const { data: products, isLoading } = useQuery('products', () =>
        axios.get('http://localhost:5000/parts')
    );

    if (isLoading) {
        return '';
    }

    const allProducts = products.data;

    return (
        <div className="table-container">
            <h3>Manage Products</h3>

            <table className="review-table">
                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>In Stock</th>
                        <th>Min Order</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {allProducts.map((product, index) => (
                        <ProductsTable
                            key={product._id}
                            product={product}
                            index={index}
                        ></ProductsTable>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ManageProducts;
