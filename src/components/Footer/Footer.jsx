import React from "react";

import styles from './Footer.module.css';
import SocialLinks from "../SocialLinks";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <SocialLinks />
    </div>
  );
}

export default Footer;