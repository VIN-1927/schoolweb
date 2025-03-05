import React from 'react';
import logo from '../assets/images/Andrew.png';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const linkClass = ({ isActive }) =>
    isActive
      ? 'bg-black text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2'
      : 'text-white hover:bg-yellow-500 hover:text-white rounded-md px-3 py-2';

  return (
    <nav className="bg-indigo-700 border-b border-indigo-500 w-full fixed top-0 z-50">
    <div className="max-w-[90%] mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex h-16 items-center justify-between">
        <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
          <NavLink className="flex flex-shrink-0 items-center mr-4" to="/">
            <img className="h-10 w-10 rounded-full" src={logo} alt="picture book" />
            <span className="hidden md:block text-white text-2xl font-bold ml-2">
              NEWS
            </span>
          </NavLink>
            <div className="md:ml-auto">
              <div className="flex space-x-2">
                <NavLink to="/" className={linkClass}>
                  Home
                </NavLink>
                <NavLink to="/about" className={linkClass}>
                  About
                </NavLink>
                
                <NavLink to="/image" className={linkClass}>
                Image Gallery
                </NavLink>
                <NavLink to="/family" className={linkClass}>
                MyFamily
                </NavLink>
                <NavLink to="/spiralmonkey" className={linkClass}>
               Monkey
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

