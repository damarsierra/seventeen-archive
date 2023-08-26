import React from "react";
import styles from './Handle.module.css'

const Handle = ({side}) => {
  return (
    <>
      {side === "left" ? 
        <span className={`${styles.handle} ${styles.left}`}>
        </span>
        : 
        <span className={`${styles.handle} ${styles.right}`}>
        </span>
      }
    </>
    
  );
}

export default Handle;