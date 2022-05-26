import React from 'react';
import './Education.css'

const Education = ({edu}) => {
    const {industry, department, status} = edu;
    return (
        <div className='edu-card'>
            <h3>{industry}</h3>
            <p><b>{department}</b></p>
            <p>{status}</p>
        </div>
    );
};

export default Education;