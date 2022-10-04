import React, { useState} from 'react';

import { Link } from 'react-router-dom';
import './Navbar.css';
import { MdFingerprint } from 'react-icons/md';

import { IconContext } from 'react-icons/lib';

function Navbar() {
  const [click, setClick] = useState(false);
  

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  


  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <nav className='navbar'>
          <div className='navbar-container container'>
            <Link to='#' className='navbar-logo' onClick={closeMobileMenu}>
              SUPERMARKET
            </Link>
            {/* <div className='menu-icon' onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </div> */}
            {/* <ul className={click ? 'nav-menu active' : 'nav-menu'}>
              <li className='nav-item'>
                <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                  Home
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  to='/services'
                  className='nav-links'
                  onClick={closeMobileMenu}
                >
                  Services
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  to='/products'
                  className='nav-links'
                  onClick={closeMobileMenu}
                >
                  Products
                </Link>
              </li>
              
            </ul> */}
          </div>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;