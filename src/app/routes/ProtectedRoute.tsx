import React from 'react';
import { Navigate } from 'react-router-dom';

import { useAuth } from '/src/app/hooks/auth';

import { Routes, Route } from 'react-router-dom';

import { SkeletonElemenet } from '/src/app/elements';

// layout
import DashboardLayout from '/src/app/layouts/DashboardLayout';

// specific route
const Dashboard = React.lazy(() => import('/src/app/containers/Dashboard'));
const UserList = React.lazy(() => import('/src/app/containers/User/UserList'));
const Logout = React.lazy(() => import('/src/app/containers/Logout'));

const ProtectedRoute = () => {
  const { auth } = useAuth();

  if (!auth.isAuthenticated) {
    return <Navigate to='/' replace />;
  }

  return (
    <Routes>
      <Route path='/' element={<DashboardLayout />}>
        <Route
          index
          element={
            <React.Suspense fallback={<SkeletonElemenet />}>
              <Dashboard />
            </React.Suspense>
          }
        />
        <Route
          path='user'
          element={
            <React.Suspense fallback={<SkeletonElemenet />}>
              <UserList />
            </React.Suspense>
          }
        />
        <Route
          path='logout'
          element={
            <React.Suspense fallback={<SkeletonElemenet />}>
              <Logout />
            </React.Suspense>
          }
        />
      </Route>
    </Routes>
  );
};

export default ProtectedRoute;
