import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Qiskit_Logo from '../assets/qiskit logo.svg';
import styles from './Navbar.module.css';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className={styles.navbar}>
      <div className={styles.navContainer}>
        <Link to="/" className={styles.navLogo}>
          <img src={Qiskit_Logo} alt="Qiskit" className={styles.navLogoImg} />
          <span>Qiskit Fall Fest</span>
        </Link>
        
        <div className={`${styles.navMenu} ${isOpen ? styles.active : ''}`}>
          <Link 
            to="/" 
            className={`${styles.navLink} ${isActive('/') ? styles.active : ''}`}
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link 
            to="/organizers" 
            className={`${styles.navLink} ${isActive('/organizers') ? styles.active : ''}`}
            onClick={() => setIsOpen(false)}
          >
            Organizers
          </Link>
          <Link 
            to="/past-event" 
            className={`${styles.navLink} ${isActive('/past-event') ? styles.active : ''}`}
            onClick={() => setIsOpen(false)}
          >
            Past Event
          </Link>
        </div>
        
        <div className={styles.navToggle} onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;