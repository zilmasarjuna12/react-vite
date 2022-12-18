import * as React from 'react';
import { Routes, Route } from 'react-router-dom';

const PublicRoute = React.lazy(() => import('/src/app/routes/PublicRoute'));
const ProtectedRoute = React.lazy(() => import('/src/app/routes/ProtectedRoute'));

const App = () => (
  <Routes>
    <Route
      path=''
      element={
        <React.Suspense fallback={<>...</>}>
          <PublicRoute />
        </React.Suspense>
      }
    />
    <Route
      path='dashboard/*'
      element={
        <React.Suspense fallback={<>...</>}>
          <ProtectedRoute />
        </React.Suspense>
      }
    />
  </Routes>
);

export default App;
