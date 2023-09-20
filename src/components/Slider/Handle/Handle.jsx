import React from "react";
import styles from './Handle.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'


const Handle = ({type, onClick}) => {
  return (
    <>
      {type === "prev" ? 
        <span className={`${styles.handle} ${styles.prev}`} onClick={onClick}>
          <FontAwesomeIcon icon={faChevronLeft} />
        </span>
        : 
        <span className={`${styles.handle} ${styles.next}`} onClick={onClick}>
          <FontAwesomeIcon icon={faChevronRight} />
        </span>
      }
    </>
    
  );
}

export default Handle;