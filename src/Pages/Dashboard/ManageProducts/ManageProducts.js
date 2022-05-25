import axios from 'axios';
import React from 'react';
import { confirmAlert } from 'react-confirm-alert';
import toast from 'react-hot-toast';
import { useQuery } from 'react-query';
import ProductsTable from '../ProductsTable/ProductsTable';
import './ManageProducts.css';

const ManageProducts = () => {
    const { data: products, isLoading, refetch } = useQuery('products', () =>
        axios.get('http://localhost:5000/parts')
    );

    if (isLoading) {
        return '';
    }

    const handleDeleteProduct = (id) => {
        confirmAlert({
            title: 'Confirm Order Cancel',
            message: 'Are you sure you want to cancel this order?',
            buttons: [
                {
                    label: 'Yes',
                    onClick: () => {
                        axios.delete(`http://localhost:5000/part/${id}`)
                        .then(data => {
                            if(data.data?.acknowledged) {
                                toast.success('Product deleted successfully!')
                                refetch()
                            }
                        })
                    },
                },
                {
                    label: 'No',
                    onClick: () => '',
                },
            ],
        });
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
                            deleteProduct={handleDeleteProduct}
                        ></ProductsTable>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ManageProducts;
