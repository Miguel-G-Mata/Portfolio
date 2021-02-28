import React, { useState, useEffect } from 'react';
import { Button } from '../../atoms/button/Button';
import { Button2 } from '../../atoms/button/Button-2';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}></Link>
          <div>
            <h1 className="titre-1">Miguel G Mata</h1>
          </div>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Accueil
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/biographie'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Biographie
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/products'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Projets
              </Link>
            </li>
            <li>
              <Link
                to='/contactez-moi'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                Contactez-moi
              </Link>
            </li>
            <li>
              <Link
                to='/télécharger-CV'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                Télécharger CV
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle='btn--outline-1'>Contactez-moi</Button>}
          {button && <Button2 buttonStyle='btn--outline-2'>Télécharger CV</Button2>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;

/**
 *     <li className='nav-item'>
            <Link
              to='/services'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Services
            </Link>
        </li>
 */