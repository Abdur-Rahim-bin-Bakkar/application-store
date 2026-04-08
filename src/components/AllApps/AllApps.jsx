import React, { use } from 'react';
import AppCard from '../AppCard/AppCard';
// const data = fetch('/data.json').then(res => res.json())
const AllApps = ({data}) => {
    console.log(data)

    const appsData = use(data)
    return (
        <div className='bg-[#f5f5f5] pt-13 pb-10'>
            <h1 className='text-2xl md:text-4xl font-bold text-center'>Our All Applications</h1>
            <p className='text-center text-[#627382] mt-4'>Explore All Apps on the Market developed by us. We code for Millions</p>
            <div className="flex flex-col gap-3 md:flex-row justify-between max-w-11/12 mx-auto mt-8">
                <h2 className='text-2xl font-bold'>{appsData.length} Apps found</h2>
                <label className="input">
                    <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <g
                            strokeLinejoin="round"
                            strokeLinecap="round"
                            strokeWidth="2.5"
                            fill="none"
                            stroke="currentColor"
                        >
                            <circle cx="11" cy="11" r="8"></circle>
                            <path d="m21 21-4.3-4.3"></path>
                        </g>
                    </svg>
                    <input type="search" required placeholder="search Apps" />
                </label>
            </div>
            <div className='max-w-11/12 mx-auto mt-4 grid md:grid-cols-3 lg:grid-cols-4 sm:grid-cols-2 gap-4'>
                {
                    appsData.map((app, ind) => {
                        

                        return <AppCard key={app.id} app={app} />
                    })
                }
            </div>
        </div>
    );
};

export default AllApps;