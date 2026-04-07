import React from 'react';
import { createBrowserRouter } from 'react-router';
import MainLayout from '../Layouts/MainLayout';
import HomePage from '../Pages/HomePage/HomePage';

export const router = createBrowserRouter([
    {
        path:"/",
        Component :MainLayout,
        children:[
            {
                index: true,
                Component: HomePage
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