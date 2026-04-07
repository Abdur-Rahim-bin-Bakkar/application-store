import React from 'react';
import logo from '../../assets/images/logo.png'
import { FaFacebook, FaLinkedin } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
const Footer = () => {
    return (
        <div className="bg-[#001931]">
            <div className='max-w-11/12 pt-4 mx-auto'>
                <div className="flex justify-between py-4 items-start">
                    <div className="flex gap-2 items-center">
                        <img src={logo} className='w-10' alt="" />
                        <h3 className='text-white font-bold'>HERO.IO</h3>
                    </div>
                    <div className="">
                        <h3 className='text-white font-bold'>Social Links</h3>
                        <div className="flex gap-4 mt-4 items-center">
                            <span className='bg-white w-8 h-8 flex justify-center items-center rounded-full'>
                                <FaXTwitter className='' />
                            </span>
                            <FaLinkedin className='text-white text-4xl' />

                            <FaFacebook className='text-white text-4xl' />
                        </div>
                    </div>
                </div>
                <p className='text-[#FAFAFA] text-center my-5 border-t border-[#E5E7EB50] pt-5 pb-4'>Copyright © 2025 - All right reserved</p>
            </div>
        </div>
    );
};

export default Footer;