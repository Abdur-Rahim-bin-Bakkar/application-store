import React from 'react';
import TranAppCardCont from './TranAppCardCont';
import { Link } from 'react-router';

const TrandignApps = () => {
    return (
        <div className='bg-[#f5f5f5] py-10 '>
            <h1 className='text-4xl font-bold text-center text-[#001931]'>Trending Apps</h1>
            <p className='text-[#627382] text-center mt-3'>Explore All Trending Apps on the Market developed by us</p>

            <TranAppCardCont />
            <Link to={'/apps'} className='flex justify-center mt-5'>
                <button className='btn bg-linear-to-bl to-[#632EE3] from-[#9F62F2] text-white font-bold'>Show All</button>
            </Link>
        </div>
    );
};

export default TrandignApps;