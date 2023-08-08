import React from "react";

import styles from './SliderSegment.module.css'

const placeholderImg = "https://i.ytimg.com/vi/_VY-lZAQbfg/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDdOU8J2FqJw7sZr37U_teB52PePg";

const SliderSegment = () => (
  <div className={styles.shows}>
    <img className={styles.showImage} src={placeholderImg} alt="" />
    <img className={styles.showImage} src={placeholderImg} alt="" />
    <img className={styles.showImage} src={placeholderImg} alt="" />
    <img className={styles.showImage} src={placeholderImg} alt="" />
    <img className={styles.showImage} src={placeholderImg} alt="" />
    <img className={styles.showImage} src={placeholderImg} alt="" />
    <img className={styles.showImage} src={placeholderImg} alt="" />
    <img className={styles.showImage} src={placeholderImg} alt="" />
    <img className={styles.showImage} src={placeholderImg} alt="" />
  </div>
);

export default SliderSegment;