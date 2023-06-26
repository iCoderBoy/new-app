import React, { useEffect, useState } from 'react';
import styles from '../../styles/navbar.module.css';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [navbar, setNavbar] = useState(false);
  const {bgColor, setBgColor} = useState(0);

  const changeBackground = () => {
    const currentPos = window.pageYOffset;
    if(window.scrollY >= 80)
    {
      setNavbar(true);
    }
    else
    {
      setNavbar(false);
    }
    window.addEventListener('scroll', changeBackground);
  };

  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={`${styles.nav} ${isMenuOpen ? styles.open : ''} ${navbar ? 'nav active' : 'nav'}`}>
      <h3>Salikh<span>Group</span></h3>
      <nav className={`${isMenuOpen ? styles.open : ''}`}>
        <a href="#hero">Home</a>
        <a href="#my_work">My Work</a>
        <a href="#aboutUs">About Me</a>
        <a href="#contact">Contact</a>
      </nav>
      <menu>
        <a href="#">LogIn</a>
        <a href="#">SignUp</a>
      </menu>
      <div className={styles.hamburger} onClick={toggleMenu}>
        <div className={`${styles.bar} ${isMenuOpen ? styles.active : ''}`}>
            <span className={styles.toog}></span>
            <span className={styles.toog}></span>
            <span className={styles.toog}></span>
        </div>
      </div>
    </div>
  );
}
