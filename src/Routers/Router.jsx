import React from 'react';
import { createBrowserRouter } from 'react-router';
import MainLayout from '../Layouts/MainLayout';
import HomePage from '../Pages/HomePage/HomePage';
import AllApps from '../components/AllApps/AllApps';

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
                Component: AllApps
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