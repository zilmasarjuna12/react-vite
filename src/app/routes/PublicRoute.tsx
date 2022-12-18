import React from 'react';
import { Navigate } from 'react-router-dom';

import { useAuth } from '/src/app/hooks/auth';

import { Routes, Route } from 'react-router-dom';

const Login = React.lazy(() => import('/src/app/containers/Login'));

const PublicRoute = () => {
  const { auth } = useAuth();

  if (auth.isAuthenticated) {
    return <Navigate to='/dashboard' replace />;
  }

  return (
    <Routes>
      <Route
        path='/'
        element={
          <React.Suspense fallback='...'>
            <Login />
          </React.Suspense>
        }
      />
    </Routes>
  );
};

export default PublicRoute;
