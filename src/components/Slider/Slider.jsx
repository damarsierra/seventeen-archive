import React from "react";
import SliderSegment from "./SliderSegment";
import styles from './Slider.module.css'

const Slider = ({title, id}) => {
  return (
    <div className={styles.container}>
      <h2 className={`${styles.sliderTitle} ${styles.top}`}>{title}</h2>
      <SliderSegment playlistId={id} />
    </div>
  );
}

export default Slider;