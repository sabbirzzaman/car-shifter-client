import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import './AddProducts.css';

const AddProducts = () => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = (data) => {
        axios.post('http://localhost:5000/part', data, {
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        }).then(result => {
            if(result.data?.acknowledged) {
                toast.success('Product Added successfully!')
                reset()
            }
        })
    };

    return (
        <div className="add-product-section">
            <h3>Add New Products</h3>

            <form className="form" onSubmit={handleSubmit(onSubmit)}>
                <div className="field-group">
                    <input
                        placeholder="Product Name"
                        {...register('name')}
                        required
                    />
                </div>

                <div className="field-group">
                    <input
                        placeholder="Product Price"
                        type="number"
                        {...register('price')}
                        required
                    />
                </div>

                <div className="field-group">
                    <input
                        placeholder="Minimum Order Quantity"
                        {...register('orderQuantity')}
                        required
                    />
                </div>

                <div className="field-group">
                    <input
                        placeholder="In Stock"
                        {...register('inStock')}
                        required
                    />
                </div>

                <div className="field-group">
                    <input type="file" {...register('image')} required />
                </div>

                <div className="field-group">
                    <textarea
                        id="message"
                        placeholder="Product Details"
                        {...register('description')}
                        cols="30"
                        rows="10"
                        required
                    ></textarea>
                </div>

                <input className="btn" type="submit" value="Add New Product" />
            </form>
        </div>
    );
};

export default AddProducts;
