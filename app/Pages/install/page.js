import React from 'react';
import Link from 'next/link';
<link href="https://fonts.googleapis.com/css2?family=FontName:wght@weight&display=swap" rel="stylesheet" />

export default function Home() {
  return (
    <>
      <div className="h-[700px] flex items-center justify-center bg-[#ececec]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-4">
          {/* Left Side: Text Content */}
          <div className="text-left md:w-1/2 flex flex-col justify-center ml-[-180px]">
            <h1 className="text-[50px] h-[58px] w-[1100px] mb-[50px] font-hp">
              Easy setup, effortless printing!
            </h1>
            <p className="text-lg md:text-xl mb-4 mb-[80px] font-hp">
              Click Install Setup for Install HP Smart
            </p>
            <Link href="./install/process">
              <button className="text-[#0096D6] W-[267px] h-[64px] pt-[1px] pr-[50px] pb-[1px] pl-[67px] text-[24px]  border-2 border-solid ">
                Install Setup
              </button>
            </Link>
          </div>

          {/* Right Side: Image */}
          <div className="md:w-1/2 flex justify-center mt-8 md:mt-0">
          <img 
              src="/hp.png" 
              alt="Printers" 
              className="w-full max-w-lg h-[400px] w-[1000px] pr-[13px]"
            />
            <img 
              src="https://www.qwebcare.com/help/images/Win10_Image_mid.png" 
              alt="Printers" 
              className="w-full max-w-lg h-[350px] w-[900px] mr-[-136px]"
            />
          </div>
        </div>
       
      </div>
      <div className='h-[270px] bg-gray-200'></div>
     
    </>
  );
}
