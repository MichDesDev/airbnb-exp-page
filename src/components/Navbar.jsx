import React from 'react';

function Navbar() {
  const logo = '/images/airbnb_logo.png';
  return (
    <nav>
      <img src={logo} className="nav--logo" alt="logo" />
    </nav>
  );
}

export default Navbar;
