import React from 'react';
import styles from './Billboard.module.css';

import BillboardInfo from '../BillboardInfo';

const Billboard = () => {
  return (
    <div className={styles.billboardRow}>
      <div className={styles.billboard}>
        <div className={styles.billboardImageWrapper}>
          <img className={styles.billboardImage} src="https://kpopping.com/documents/c5/0/3000/230516-SEVENTEEN-FML-Behind-Sketch-documents-2.jpeg?v=456a5" alt="" />
          <div className={styles.billboardImageVignette}></div>
        </div>
        <BillboardInfo />
      </div>
    </div>
  );
}

export default Billboard;