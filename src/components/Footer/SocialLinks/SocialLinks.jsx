import React from "react";
import styles from './SocialLinks.module.css';

import TwitterIcon from "../../../Icons/TwitterIcon";
import InstagramIcon from '../../../Icons/InstagramIcon';
import YouTubeIcon from '../../../Icons/YouTubeIcon';

const SocialLinks = () => {
  return (
    <div className={styles.socialLinks}>
      <div className={styles.linkIcon}>
        <TwitterIcon />
      </div>
      <div className={styles.linkIcon}>
        <YouTubeIcon />
      </div>
      <div className={styles.linkIcon}>
        <InstagramIcon />
      </div>
    </div>

  );
}

export default SocialLinks;