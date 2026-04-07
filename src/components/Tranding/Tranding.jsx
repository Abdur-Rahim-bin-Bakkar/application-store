import React from 'react';

const Tranding = () => {
    return (
        <div className='bg-linear-to-bl to-[#632EE3] from-[#9F62F2] text-white py-15'>
            <h1 className='text-center text-4xl font-bold'>Trusted by Millions, Built for You</h1>

            <div className="grid md:grid-cols-3 mt-8 gap-5 ">
                <div className="text-center space-y-3">
                    <p>Total Downloads</p>
                    <h1 className='text-5xl font-bold'>29.6M</h1>
                    <p>21% more than last month</p>
                </div>
                <div className="text-center space-y-3">
                    <p>Total Reviews</p>
                    <h1 className='text-5xl font-bold'>906K</h1>
                    <p>46% more than last month</p>
                </div>
                <div className="text-center space-y-3">
                    <p>Active Apps</p>
                    <h1 className='text-5xl font-bold'>132+</h1>
                    <p>31 more will Launch</p>
                </div>
            </div>
        </div>
    );
};

export default Tranding;