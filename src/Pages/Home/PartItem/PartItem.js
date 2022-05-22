import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './PartItem.css';

const PartItem = ({ product }) => {
    const { name, image, price, description, orderQuantity, inStock } = product;

    return (
        <div className="product-item">
            <div className="purchase">
                <button className="purchase-btn">
                    <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>
                    Purchase now</button>
            </div>
            <div className="product">
                <h5 className='stock'>{inStock} - In Stock</h5>
                <div className="product-img">
                    <img src={image} alt={name} />
                </div>
                <h4>{name}</h4>
                <h5>${price}.00</h5>
                <p className='details'>{description}</p>
            </div>
        </div>
    );
};

export default PartItem;
