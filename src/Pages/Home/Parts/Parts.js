import axios from 'axios';
import React from 'react';
import { useQuery } from 'react-query';
import Loader from '../../Common/Loader/Loader';
import PartItem from '../PartItem/PartItem';
import './Parts.css';

const Parts = () => {
    const { data, isLoading } = useQuery('products', () =>
        axios.get('https://car-shifter.herokuapp.com/parts')
    );

    if (isLoading) {
        return <Loader height="50vh" />;
    }

    const products = data.data;

    // reversed data
    const reversedData = [...products].reverse();

    // get limited data
    const productsLimit = reversedData.slice(0, 6);

    return (
        <section className="parts-section">
            <div className="container">
                <h2>Our products</h2>

                <div className="products">
                    {productsLimit.map((product) => (
                        <PartItem
                            key={product._id}
                            product={product}
                        ></PartItem>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Parts;
