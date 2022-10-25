import React from 'react';
import { Navigate, useRoutes } from 'react-router-dom';

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
                    element: <h1>Main</h1>,
                },
                { path: 'details', element: <h1>Details</h1> },
            ],
        },
    ]);

    return routes;
};

export default AppRouter;

