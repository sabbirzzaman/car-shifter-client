import axios from 'axios';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import auth from '../../../firebase.init';
import Loader from '../../Common/Loader/Loader';
import './MyOrders.css'

const MyOrders = () => {
    const [user] = useAuthState(auth)

    // get user orders data
    const {data, isLoading} = useQuery('orders', () => axios.get(`http://localhost:5000/orders?email=${user?.email}`))

    if(isLoading) {
        return <Loader height="50vh"></Loader>
    }

    console.log(data.data)

    return (
        <div>
            <h3>{user.displayName}'s Orders</h3>
        </div>
    );
};

export default MyOrders;