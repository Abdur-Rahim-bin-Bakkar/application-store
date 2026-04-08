import React, { use } from 'react';
import { FaStar } from 'react-icons/fa';
import { useLoaderData } from 'react-router';
import rating from '../../assets/images/icon-ratings.png'
import review from '../../assets/images/icon-review.png'
import download from '../../assets/images/icon-downloads.png'
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from 'recharts';

const data = fetch('/data.json').then(res => res.json())

const DetCard = () => {
    const clickId = useLoaderData()
    const useData = use(data)

    const expectedData = useData.find(exData => exData.id == clickId)
    console.log(expectedData)
    // console.log(useData)
    // const barcharts = expectedData.ratings
    // console.log(barcharts)
    return (
        <div className='bg-[#f5f5f5] pt-13 pb-10'>
            <div className="max-w-11/12 mx-auto">
                <div className="card card-side bg-transparent">
                    <div className='p-4 bg-white'>
                        <img
                            src={expectedData.image}
                            alt="Movie"
                            className=' max-h-60 bg-white' />
                    </div>
                    <div className="card-body">
                        <h2 className="card-title text-3xl font-bold">{expectedData.title}</h2>
                        <p className=' font-semibold'>Developed By: <span className=' bg-linear-to-bl to-[#632EE3] from-[#9F62F2] bg-clip-text text-transparent cursor-pointer'>{expectedData.companyName}</span> </p>


                        <div className="grid grid-cols-3 gap-3">
                            <div className="space-y-2">
                                <img src={download} alt="" />
                                <p>Downloads</p> 
                                <h2 className='text-2xl font-bold'>{expectedData.downloads}</h2>
                            </div>
                            <div className="space-y-2">
                                <img src={rating} alt="" />
                                <p>Average Ratings</p> 
                                <h2 className='text-2xl font-bold'>{expectedData.ratingAvg}</h2>
                            </div>
                            <div className="space-y-2">
                                <img src={review} alt="" />
                                <p>Total Reviews</p> 
                                <h2 className='text-2xl font-bold'>{expectedData.reviews}</h2>
                            </div>
                        </div>
                        <button className="btn bg-[#00D390] text-white font-semibold max-w-50">Install Now ({expectedData.size} MB)</button>

                    </div>
                </div>
            <div className="divider"></div>
            <div className="">
                <h1 className='text-2xl font-bold'>Ratings</h1>
                <ResponsiveContainer  width={'100%'} height={300}>
                    <BarChart width={500} height={500}  data={expectedData.ratings}>
                        <XAxis dataKey={"count"}></XAxis>
                        <YAxis dataKey={"name"}></YAxis>
                        <Bar dataKey={"count"}></Bar>
                    </BarChart>
                </ResponsiveContainer>
            </div>
            <div className="divider"></div>
            <h1 className='text-2xl font-bold'>Description</h1>
            <p className='text-[#627382] mt-3'>{expectedData.description}</p>
            </div>
        </div>
    );
};

export default DetCard;