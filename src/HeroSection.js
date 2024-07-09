import React from 'react';
import { Link } from 'react-scroll';

const HeroSection = () => {
  return (
    <div id="HeroSection" className=" bg-[#fffbe8] max-h-screen w-full">
      <div className="absolute top-0 right-0 z-0">
        <img src='bulat1.png' alt="Substract Decoration" className="w-50 h-30" />
      </div>
      <div className="absolute bottom-0 left-0 z-0">
        <img src='bulat2.png' alt="Decorative Circle" className="w-50 h-40" />
      </div>
      <div className="flex flex-col max-h-screen lg:flex-row items-center justify-between w-full lg:max-w-screen-xl mx-auto ">
        <div className="flex flex-col items-start lg:w-1/2 text-left mt-[-10px] lg:mt-[-200px]">
          <h1 className="font-semibold text-black font-poppins leading-10" style={{ letterSpacing: '3px', fontSize: '16px' }}>
            Selamat Datang
          </h1>
          <h2 className="text-5xl font-bold mb-4 w-48 font-poppins" style={{ color: '#B88E2F', fontSize: '56px'}}>
            Klasifikasi Serangga
          </h2>
          <p className="text-gray-700 mb-4 max-w-lg font-poppins" style={{ fontSize: '14px'}}>
            Menyajikan informasi menarik tentang berbagai jenis serangga beserta manfaat dan dampak yang mereka berikan.
          </p>
          <div className="flex space-x-4">
            <Link to="FileInput" smooth={true} duration={800} className="cursor-pointer">
              <button
                className="text-white py-2 px-4 rounded transition transform hover:scale-105 whitespace-nowrap font-roboto shadow-md"
                style={{ backgroundColor: '#B88E2F', hover: { backgroundColor: '#A87E2A', fontSize: '14px' } }}
              >
                Proses Data
              </button>
            </Link>
            <Link to="Data" smooth={true} duration={800} className="cursor-pointer">
            <button className="border-2 border-customGreen text-customGreen py-2 px-4 rounded hover:border-customGreen hover:text-customGreen transition transform hover:scale-105 font-poppins shadow-md font-roboto" style={{ fontSize: '14px' }}>
              More Info
            </button>
            </Link>
          </div>
        </div>
        <div className="lg:w-1/2 max-h-screen flex justify-center w-full">
          <img src='bee2.png' alt="Bee on flower" className="w-auto h-auto mt-30 lg:mt-40 mr-12" /> {/* Adjusted margin-top for the image */}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;