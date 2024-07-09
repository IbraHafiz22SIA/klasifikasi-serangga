import React from 'react';
import { Link } from 'react-scroll';
import './App.css';


const Header = () => {
  return (
    <nav className="w-full flex justify-between items-center px-8 py-4 bg-transparent fixed top-0 z-10">
      <div className="flex items-center space-x-2">
        <img src="log1.png" alt="Insect Logo" className="w-11 h-11" style={{ width: '77px', height: '77px' }} />
        <span className="font-bold text-black font-montserrat" style={{ fontSize: '34px' }}>Insect</span>
      </div>
      <div className="w-full flex justify-center">
        <div className="space-x-7 font-poppins">
          <Link to="HeroSection" smooth={true} duration={500} className="nav-link cursor-pointer" style={{ fontSize: '16px' }}>Home</Link>
          <Link to="AboutUs" smooth={true} duration={500} className="nav-link cursor-pointer" style={{ fontSize: '16px' }}>About</Link>
          <Link to="Data" smooth={true} duration={500} className="nav-link cursor-pointer" style={{ fontSize: '16px' }}>Data</Link>
          <Link to="Lecture" smooth={true} duration={1000} className="nav-link cursor-pointer" style={{ fontSize: '16px' }}>Lecture</Link>
          <Link to="Team" smooth={true} duration={1000} className="nav-link cursor-pointer" style={{ fontSize: '16px' }}>Profile</Link>
        </div>

      </div>
      <div>
        <Link to="FileInput" smooth={true} duration={800} className="cursor-pointer">
          <button className="bg-[#B88E2F] text-white py-2 px-6 rounded-full hover:bg-yellow-600 transition whitespace-nowrap flex items-center font-roboto shadow-md hover:shadow-lg"style={{ fontSize: '14px' }}>
            Proses Data
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Header;