import React from 'react';
import { Navigate, useRoutes } from 'react-router-dom';
import DetailsPage from './pages/Details/DetailsPage';
import MainPage from './pages/Main/MainPage';

const AppRouter = () => {
    const routes = useRoutes([
        {
            path: '/',
            children: [
                {
                    path: '/',
                    element: <Navigate to="main" />,
                },
                {
                    path: 'main',
                    element: <MainPage />,
                },
                { path: 'details', element: <DetailsPage /> },
            ],
        },
    ]);

    return routes;
};

export default AppRouter;

