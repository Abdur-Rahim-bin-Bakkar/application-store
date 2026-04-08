import React from 'react';
import { FaCloudDownloadAlt, FaStar } from 'react-icons/fa';

const InsistallCard = ({ app }) => {
    return (
        <div>
            <div className='card mt-3 p-3 rounded-2xl bg-white flex-row items-center justify-between'>
                <div className="flex gap-3">
                    <div className="">
                    <img src={app.image} className='w-full rounded-lg max-h-15 object-contain' alt="" />
                </div>
                <div className="">
                    <h1 className='text-sm items-center font-bold'>{app.title}</h1>
                    <div className="flex justify-between">
                        <div className="bg-[#F1F5E8] text-[#00D390] flex items-center gap-3 py-1 px-3 rounded-md font-semibold">
                            <FaCloudDownloadAlt />
                            <span>{app.downloads}</span>
                        </div>
                        <div className="bg-[#FFF0E1] text-[#FF8811] flex items-center gap-3 py-1 px-3 rounded-md font-semibold">
                            <FaStar />
                            <span>{app.ratingAvg}</span>
                        </div>
                    </div>
                </div>F
                </div>
                <button className='btn'>UnInistall</button>
            </div>
        </div>
    );
};

export default InsistallCard;