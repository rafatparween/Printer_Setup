"use client";
import React from 'react';
import { useRouter } from 'next/navigation'; 
import './PrinterSetup.css';

const PrinterSetup = () => {
  const router = useRouter(); 

  const handleSetupClick = () => {
    router.push('/Pages'); 
  };

  return (
    <div className="printer-setup">
      <div className="text-content">
        <h1>123 PRINTER SETUP</h1>
        <ul>
          <li>Make sure your printer is powered on</li>
          <li>Select Download to install the recommended printer software to complete setup</li>
        </ul>
        <button className="setup-button" onClick={handleSetupClick}>
          Click Here for Setup
          <img src='hplogo.jpeg' alt="HP Logo" className="hp-logo" />
        </button>
      </div>

      <img src='boyimage.png' alt="Printer" className="printer-image" />
    </div>
  );
};

export default PrinterSetup;


















