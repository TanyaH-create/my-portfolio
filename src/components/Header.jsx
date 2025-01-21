import React from 'react';
import Navbar from './Navbar';

function Header() {
  return (
    <header className="header border-bottom">
      <div className="container d-flex justify-content-between align-items-center px-3">
        <div className="d-flex align-items-center">
          <img
            src="/assets/images/TH-monogram.png"
            alt="Monogram"
            className="monogram img-fluid custom-margin-right"
          />
          <h1 className="mb-0">Tanya Hauck</h1>
        </div>
        <Navbar />
      </div>
    </header>
  );
}

export default Header;
