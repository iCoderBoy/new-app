import React, { useState } from 'react';
import styles from '../../styles/navbar.module.css';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={`${styles.nav} ${isMenuOpen ? styles.open : ''}`}>
      <h3>Coding<span>Hub</span></h3>
      <nav className={`${isMenuOpen ? styles.open : ''}`}>
        <a href="#hero">Home</a>
        <a href="#my_work">My Work</a>
        <a href="#">Blog</a>
        <a href="#">About Me</a>
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
