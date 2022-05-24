import axios from 'axios';
import { useEffect, useState } from 'react';

const useToken = (user) => {
    const [token, setToken] = useState('');

    useEffect(() => {
        const email = user?.user?.email;

        if (email) {
            const user = { email };

            axios
                .put(`http://localhost:5000/users/${email}`, user, {
                    headers: {
                        'content-type': 'application/json',
                    },
                })
                .then((data) => {
                    const accessToken = data.data.token;

                    localStorage.setItem('accessToken', accessToken);
                    setToken(accessToken);
                });
        }
    }, [user]);
    return [token];
};

export default useToken;
