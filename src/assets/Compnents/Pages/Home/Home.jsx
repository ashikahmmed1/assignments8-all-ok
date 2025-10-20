import React from 'react';
import Banner from '../../components/Banner/Banner';
import Books from '../Books/Books';
import { useLoaderData } from 'react-router'
import HomeCart from '../HomeCard/HomeCard';


const Home = () => {
    const data = useLoaderData();
    const featuredData = data.slice(0, 10)
    console.log(featuredData)
    return (
        <div>
            <Banner></Banner>
            <HomeCart data={data}></HomeCart>
        </div>
    );
};

export default Home;