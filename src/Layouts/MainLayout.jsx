import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer'
import '../App.css';

const MainLayout = () => {
  return (
    <>
      <Navbar />
<Footer/>
      <Outlet />
    </>
  );
};

export default MainLayout;
