import React, { useState, useEffect } from 'react';
import { RiCloseLine, RiMenu3Line } from 'react-icons/ri';

import './navbar.css'; // Import your CSS file

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <div className={`navbar ${isScrolled ? 'navbar__blurry' : ''}`} id='navbar'>
        <div className='navbar_links'>
          <div className='navbar__links-container'>
            <p><a href='#Shop' alt='Shop'>Shop</a></p>
            <p><a href='#Collections' alt='Collections'>Collections</a></p>
            <p><a href='#Ourworld' alt='Our world'>Our world</a></p>
          </div>
        </div>
        <div className='navbar__heading'>
          <h1>THE DEME PURPLE STORE</h1>
        </div>
        <div className='navbar__links-container2'>
          <p><a href='#About' alt='About Us'>About Us</a></p>
        </div>
        <div className="navbar__menu-icon" onClick={() => setToggleMenu(!toggleMenu)}>
          {toggleMenu
            ? <RiCloseLine color="#000" size={30} />
            : <RiMenu3Line color="#000" size={30} />}
        </div>
      </div>
      {toggleMenu && (
        <div className="navbar__menu-container scale-up-center">
          <div className="navbar__menu-links">
            <p><a href='#Shop' alt='Shop'>Shop</a></p>
            <p><a href='#Collections' alt='Collections'>Collections</a></p>
            <p><a href='#Ourworld' alt='Our world'>Our world</a></p>
            <p><a href='#About' alt='About Us'>About Us</a></p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
