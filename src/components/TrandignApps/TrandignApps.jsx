import React from 'react';
import TranAppCardCont from './TranAppCardCont';

const TrandignApps = () => {
    return (
        <div className='bg-[#f5f5f5] py-10 '>
            <h1 className='text-4xl font-bold text-center text-[#001931]'>Trending Apps</h1>
            <p className='text-[#627382] text-center mt-3'>Explore All Trending Apps on the Market developed by us</p>

            <TranAppCardCont/>
        </div>
    );
};

export default TrandignApps;