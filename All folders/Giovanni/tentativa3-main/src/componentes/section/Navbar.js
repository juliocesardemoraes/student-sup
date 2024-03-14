import React from 'react';
import styles from './Navbar.module.css';
import { FaInstagram, FaLinkedinIn, FaGithub } from 'react-icons/fa';
import Nav from 'react-bootstrap/Nav';


function Navbar() {
  return (
    <div className={styles.Navbar}>
      <ul className={styles.Navbar2}>
        <li>Apresentação</li>
        <li>Habilidades</li>
        <li><Nav.Link href='#Projects'>Projectos</Nav.Link></li>
      </ul>
      <ul className={styles.Navbar3}>
        <li>
          <FaInstagram size={30} />
        </li>
        <li>
          <FaLinkedinIn size={30} />
        </li>
        <li>
          <FaGithub size={30} />
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
