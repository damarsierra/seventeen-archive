import React from 'react';

import styles from './NavBar.module.css'

const NAVLINKS = [
  "Home",
  "Variety", // GoSe, SVT Club, OFD
  "Music", // MVs, Concerts
  "Reality" // HTR, ITS, SVT Record
];

const NavBar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.primaryNavbar}>
        <div className={styles.navbarLogo}>
          <img src="" alt="" />
          SVTFLIX
        </div>
        <ul className={styles.navbarList}>
          {NAVLINKS.map((link) =>
            <li className={styles.navbarItem} key={link}><a href="/">{link}</a></li>
          )}
        </ul>
        <div className={styles.secondaryNavBar}>
          <div className={styles.secondaryElement}>s</div>
          <div className={styles.secondaryElement}>v</div>
          <div className={styles.secondaryElement}>t</div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;