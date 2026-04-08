import React, { useContext } from 'react';
import { InistallContext } from '../ContextComponet/ContextComponet';
import InsistallCard from '../InsistallCard/InsistallCard';

const InistallApps = () => {
    const { insitalls, setInistalls } = useContext(InistallContext)
    console.log(insitalls)
    return (
        <div className='bg-[#f5f5f5] py-10'>
            <div className="max-w-11/12 mx-auto">
                <h1 className='text-center text-3xl font-bold'>Your Installed Apps</h1>
                <p className='text-[#627382] mt-3 text-center'>Explore All Trending Apps on the Market developed by us</p>
                <h1 className='text-lg font-bold mt-4'>1 Apps Found</h1>

                {
                    insitalls.map(app => <InsistallCard app={app}></InsistallCard>)
                }
            </div>
        </div>
    );
};

export default InistallApps;