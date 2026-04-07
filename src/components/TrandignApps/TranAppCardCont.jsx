import React, { use } from 'react';
import AppCard from '../AppCard/AppCard';
const data = fetch('/data.json').then(res => res.json())
const TranAppCardCont = () => {
    const appsData = use(data)    
    return (
        <div className='max-w-11/12 mx-auto mt-4 grid md:grid-cols-4 gap-4'>
            {
                appsData.map( (app,ind) =>{
                    
                    return <AppCard key={app.id} app={app} />
                })
            }
        </div>
    );
};

export default TranAppCardCont;