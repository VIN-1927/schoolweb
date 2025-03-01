import React from 'react';
import './App.css';
import './index.css';

import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';

import HomePage from './pages/HomePage';
import MainLayout from './Layouts/MainLayout';
import About from './pages/About.jsx';
import School from './pages/School.jsx'
import Videos from './pages/Videos.jsx'
import Myfamily from './pages/MyFamily.jsx'
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<HomePage />} />
      <Route path="about" element={<About />} />
      <Route path="school" element={<School />} />
      <Route path="videos" element={<Videos />} />
      <Route path="family" element={<Myfamily />} />
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
