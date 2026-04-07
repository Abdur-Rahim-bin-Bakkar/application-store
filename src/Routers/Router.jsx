import React from 'react';
import { createBrowserRouter } from 'react-router';
import MainLayout from '../Layouts/MainLayout';

export const router = createBrowserRouter([
    {
        path:"/",
        Component :MainLayout
    }
])

const Router = () => {
    return (
        <div>
            
        </div>
    );
};

export default Router;