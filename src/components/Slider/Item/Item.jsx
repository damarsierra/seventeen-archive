import { forwardRef, useRef, useImperativeHandle } from "react";
import styles from './Item.module.css'

const Item = forwardRef(({ episode, style }, ref) => {
  const itemRef = useRef(null);

  useImperativeHandle(ref, () => {
    return {
      clientWidth: itemRef.current.clientWidth,
    }
  });

  return (
      <a 
        key={episode.id} 
        className={styles.imageLink} 
        href={`https://www.youtube.com/watch?v=${episode.contentDetails.videoId}`}
        target="_blank"
      >
        <img className={styles.image} ref={itemRef} src={episode.snippet.thumbnails.medium.url} {...style} alt="" />
      </a>
);
});

export default Item;