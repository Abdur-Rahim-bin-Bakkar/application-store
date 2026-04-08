import React, { Suspense } from 'react';
import { createBrowserRouter } from 'react-router';
import MainLayout from '../Layouts/MainLayout';
import HomePage from '../Pages/HomePage/HomePage';
import AllApps from '../components/AllApps/AllApps';
import { HashLoader } from 'react-spinners';
import Spinner from '../components/Spinner/Spinner';
import DetCard from '../components/DetCard/DetCard';
import InistallApps from '../components/InistallApps/InistallApps';
const data = fetch('/data.json').then(res => res.json())
export const router = createBrowserRouter([
    {
        path:"/",
        Component :MainLayout,
        children:[
            {
                index: true,
                Component: HomePage
            },
            {
                path: 'apps',
                element: <Suspense fallback={<Spinner/>}>
                    <AllApps data={data}></AllApps>
                </Suspense>
            },
            {
                path: 'ditelles/:id',
                Component : DetCard ,
                loader: ({params})=>{
                    return params.id
                }
            },
            {
                path: 'inistallation',
                Component: InistallApps
            }
        ]
    }
])

const Router = () => {
    return (
        <div>
            
        </div>
    );
};

export default Router;