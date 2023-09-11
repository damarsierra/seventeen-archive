import { useEffect, useRef, useState, createRef, useLayoutEffect } from "react";
import Handle from "../Handle";
import Item from "../Item";
import styles from './SliderSegment.module.css'
import { fetchPlaylist } from "../../../API/YouTubeApi";

// const endpoint = `https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet%2CcontentDetails&maxResults=18&playlistId=PLk_UmMfvZDx21Z9eEQ9DcIlUfZp1uwEup&key=`;
const PADDINGS = 120;
const EM = 16
// const totalInViewport = 5;

const SliderSegment = ({playlistId}) => {
  const containerRef = useRef(null);
  const itemRefArr = useRef([]);

  const [episodes, setEpisodes] = useState([]);
  const [containerWidth, setContainerWidth] = useState(0);
  const [elementWidth, setElementWidth] = useState(0);
  const [totalInViewport, setTotalInViewport] = useState(0);
  const [distance, setDistance] = useState(0);
  const [viewed, setViewed] = useState(0);
  const [maxWidth, setMaxWidth] = useState(0);
  
  // const handleSelect = movie => {
  //   setCurrentSlide(movie);
  // };

  // const handleClose = () => {
  //   setCurrentSlide(null);
  // };

  useEffect(() => {
    Promise.all([
      fetchPlaylist(playlistId)
    ]).then((results) => {
      setEpisodes(results[0]);
    });
  }, []);

  useEffect(() => {
    const containerWidth = containerRef.current.clientWidth - PADDINGS;

    setElementWidth(itemRefArr.current.clientWidth + (0.4 * EM));
    setContainerWidth(containerWidth);
    setTotalInViewport(Math.floor(containerWidth / elementWidth)+1)
    if(containerWidth >= 1400) {
      setMaxWidth(16 + (2/3));
    } else if (containerWidth >= 1100) {
      setMaxWidth(20);
    } else if (containerWidth >= 800) {
      setMaxWidth(25);
    } else if (containerWidth >= 500) {
      setMaxWidth(33 + (1/3));
    }
  }, [episodes]);
  
  console.log(elementWidth, containerWidth);

  const handlePrev = () => {
    setViewed(viewed - totalInViewport);
    console.log(totalInViewport)
    setDistance(distance + (containerWidth));
  }

  const handleNext = () => {
    setViewed(viewed + totalInViewport);
    console.log(viewed, totalInViewport)
    setDistance(distance - (containerWidth))
  }

  const slideProps = {
    style: { transform: `translate3d(${distance}px, 0, 0)` }
  };
  
  const itemProps = {
    style: { 
      maxWidth: `${maxWidth}%`,
      flex: `0 0 ${maxWidth}%` 
    }
  };

  const hasPrev = distance < 0;
  const hasNext = (viewed + totalInViewport) < episodes.length;

  return (
    <div className={styles.slider}>
      {hasPrev && <Handle type="prev" onClick={handlePrev} />}
      <div ref={containerRef} className={styles.sliderContent} {...slideProps}>
        {episodes.map(episode =>
          <Item key={episode.id} episode={episode} ref={itemRefArr} style={itemProps} />
        )}
      </div>
      {hasNext && <Handle type="next" onClick={handleNext} />}
    </div>
  )
};

export default SliderSegment;