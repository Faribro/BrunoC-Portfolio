import * as React from 'react';
import { Routes, Route, BrowserRouter } from "react-router-dom";

const App = React.lazy(() => import('./App.jsx'));
const Courses = React.lazy(() => import('./Pages/Courses/Courses.jsx'));
const Projects = React.lazy(() => import('./Pages/Projects/Project.jsx'));
const Error = React.lazy(() => import('./Pages/Error404/Error404.jsx'));

export function Router() {
  return (
    <BrowserRouter>
       <Routes>        
        <Route path="*" element={
            <React.Suspense fallback='loading...'>
              <Error />
            </React.Suspense>
          } />
        
        <Route path="/" element={
            <React.Suspense fallback='loading...'>
              <App />
            </React.Suspense>
          } /> 

        <Route path="/Courses" 
          element={
            <React.Suspense fallback='loading...'>
              <Courses />
            </React.Suspense>
          } />

        <Route path="/Projects" element={
            <React.Suspense fallback='loading...'>
              <Projects />
            </React.Suspense>
          } />
      </Routes>
    </BrowserRouter>
  );
}