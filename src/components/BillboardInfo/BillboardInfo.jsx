import React from "react";

import styles from './BillboardInfo.module.css';

const BillboardInfo = () => {
  return (
    <div className={styles.infoBox}>
      <img className={styles.infoTitle} src="https://occ-0-3418-3419.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABei65KYS9tv-Lv7Y98aSuIuPP4xlmOKf1XFrlaNEOJbv_w7LdmRb2-MJXreTxX1Nr_d9IpN87M4kxIcm4pPhXk9N_DBCoWbibcyjiIN6YwfXRTBnmV_gpXbvR31Bzx6lYkp735YntdF3H9QKCCYnejUmSi7em5cCcmH1shf_OicD9MKx-EIPMQ.webp?r=ca9" alt="" />
      <div className={styles.infoSynopsis}>
        <h1 className={styles.infoSynopsisTitle}></h1>
        <p className={styles.infoSynopsisBody}></p>
      </div>
      <div className={styles.infoButtons}>
        <button className={`${styles.infoButton} ${styles.primaryButton}`} href="https://www.youtube.com/watch?v=9kpuOoIh3wU" target="_blank">
          <span className={styles.buttonText}>Play</span>
        </button>
        <button className={`${styles.infoButton} ${styles.secondaryButton}`} href="">
          <span className={styles.buttonText}>More Info</span>
        </button>
      </div>
    </div>
  );
}

export default BillboardInfo;