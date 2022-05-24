import axios from 'axios';
import { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import auth from '../firebase.init';

const useAdmin = () => {
    const [admin, setAdmin] = useState(false);

    const [{ email }] = useAuthState(auth);

    // get user orders data
    const { data: users } = useQuery('user', () =>
        axios.get(`http://localhost:5000/user/${email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`,
            },
        })
    );

    useEffect(() => {
        if (users?.data.role) {
            setAdmin(true);
        } else {
            setAdmin(false);
        }
    }, [users?.data.role]);

    return [admin];
};

export default useAdmin;
