import React from 'react';
import playStor from '../../assets/images/playStor.png'
import Stor from '../../assets/images/stor.png'
import hero from '../../assets/images/hero.png'

const Hero = () => {
    return (
        <div className='bg-[#f5f5f5] pt-12'>
            <div className="max-w-11/12 mx-auto">
                <h1 className='text-center font-bold text-5xl'>We Build <br />
                    <span className='bg-linear-to-bl bg-clip-text to-[#632EE3] from-[#9F62F2]'>
                        <span className='text-transparent'>Productive</span>
                    </span>
                    Apps
                </h1>

                <p className='text-[#627382] text-center my-4 max-w-[75%] mx-auto'>At HERO.IO , we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. Our goal is to turn your ideas into digital experiences that truly make an impact.</p>

                <div className="flex justify-center gap-4 pb-5">
                    <button className='btn bg-transparent text-black border-[#e5e5e5] font-bold'>
                        <img src={playStor} alt="" />
                        Google Play</button>

                    <button className='btn bg-transparent text-black border-[#e5e5e5] font-bold'>
                        <img src={Stor} alt="" />
                        App Store</button>
                </div>
                <img src={hero} className='w-70 md:w-80 lg:w-100 mx-auto'  alt="" />
            </div>
        </div>
    );
};

export default Hero;