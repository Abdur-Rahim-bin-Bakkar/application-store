import React from 'react';
import { HashLoader } from 'react-spinners';

const Spinner = () => {
    return (
        <HashLoader color='#6a36e5' className='absolute top-[50%] left-[50%] z-50'/>
    );
};

export default Spinner;