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
import ImageGallery from './pages/ImageGallery.jsx';
import Myfamily from './pages/MyFamily.jsx'
import SpiralMonkey from './components/SpiralMonkey.jsx';
import MyCalendar from './pages/MyCalendar.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<HomePage />} />
      <Route path="about" element={<About />} />
      <Route path="school" element={<School />} />
      <Route path="image" element={<ImageGallery />} />
      <Route path="family" element={<Myfamily />} />
      <Route path="birthday" element={<MyCalendar />} />
      <Route path="spiralmonkey" element={<SpiralMonkey />} />
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
