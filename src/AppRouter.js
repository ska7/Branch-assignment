import React from 'react';
import { Navigate, useRoutes } from 'react-router-dom';

import MainPage from './pages/Main/MainPage';
import UserDetailsPage from './pages/UserDetails/UserDetailsPage';

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
        { path: 'details', element: <UserDetailsPage /> },
      ],
    },
  ]);

  return routes;
};

export default AppRouter;
