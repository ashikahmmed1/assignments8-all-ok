import React from 'react';
import Navbar from '../../components/Header/Navbar';
import { Outlet, useNavigate } from 'react-router';
import Footer from '../../components/Footer/Footer';
import ButtomLink from '../ButtomLink/ButtomLink';

const Root = () => {
    const navigation = useNavigate()
  
    return (
        <div className='max-w-6xl mx-auto'>
            <Navbar></Navbar>
            {navigation.state === "loading" ? 
            <Loading /> : <Outlet />}
            {/* <Outlet></Outlet> */}
            <div className='lg:items-center flex sm: justify-center items-center my-7'>
                <ButtomLink></ButtomLink>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;