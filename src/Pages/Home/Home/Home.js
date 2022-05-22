import React from 'react';
import Hero from '../Hero/Hero';
import Parts from '../Parts/Parts';
import Summary from '../Summary/Summary';
import './Home.css'

const Home = () => {
    return (
        <>
            <Hero></Hero>
            <Parts></Parts>
            <Summary></Summary>
        </>
    );
};

export default Home;