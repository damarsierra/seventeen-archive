import { useState, useRef, useEffect } from 'react'

const PADDINGS = 120;

const useSliding = (countElements, containerWidth, totalInViewport) => {
  const [distance, setDistance] = useState(0);
  const [viewed, setViewed] = useState(0);

  const handlePrev = () => {
    setViewed(viewed - totalInViewport);
    setDistance(distance + containerWidth);
  }

  const handleNext = () => {
    setViewed(viewed + totalInViewport);
    setDistance(distance - containerWidth)
  }

  const slideProps = {
    style: { transform: `translate3d(${distance}px, 0, 0)` }
  };

  const hasPrev = distance < 0;
  const hasNext = (viewed + totalInViewport) < countElements;

  return { handlePrev, handleNext, slideProps, hasPrev, hasNext };
}

export default useSliding;