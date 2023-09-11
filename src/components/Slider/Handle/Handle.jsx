import React from "react";
import styles from './Handle.module.css'

const Handle = ({type, onClick}) => {
  return (
    <>
      {type === "prev" ? 
        <span className={`${styles.handle} ${styles.prev}`} onClick={onClick}>
        </span>
        : 
        <span className={`${styles.handle} ${styles.next}`} onClick={onClick}>
        </span>
      }
    </>
    
  );
}

export default Handle;