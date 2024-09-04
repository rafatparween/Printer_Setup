import React from 'react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#ececec]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-4">
        {/* Left Side: Text Content */}
        <div className="text-left md:w-1/2 flex flex-col justify-center ml-[-180px]">
          <h1 className="text-3xl md:text-4xl text-[70px] mb-4 h-[58px] w-[1100px] mb-[50px] ">Easy setup, effortless printing!</h1>
          <p className="text-lg md:text-xl mb-4 mb-[80px]">Click Install Setup for Install HP Smart</p>
          <Link href="./install/process">
            <button className="bg-blue-500 text-white px-4 py-3 rounded-lg transition duration-300 ease-in-out hover:bg-blue-800 hover:shadow-lg">Install Setup</button>
          </Link>
          
        </div>

        {/* Right Side: Image */}
        <div className="md:w-1/2 flex justify-center mt-8 md:mt-0">
          <img 
            src="https://www.qwebcare.com/help/images/Win10_Image_mid.png" 
            alt="Printers" 
            className="w-full max-w-lg h-[400px] w-[1000px]"
          />
        </div>
      </div>
    </div>
  );
}