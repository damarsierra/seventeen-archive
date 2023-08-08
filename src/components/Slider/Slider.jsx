import React from "react";
import SliderSegment from "../SliderSegment";
import styles from './Slider.module.css'

const placeholderImg = "https://i.ytimg.com/vi/_VY-lZAQbfg/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDdOU8J2FqJw7sZr37U_teB52PePg";

const Slider = () => {
  return (
    <div className={styles.slider}>
      <h2 className={`${styles.sliderTitle} ${styles.top}`}>Going Seventeen</h2>
      <SliderSegment />
    </div>
  );
}

export default Slider;