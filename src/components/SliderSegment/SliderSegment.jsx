import { useEffect, useState } from "react";

import styles from './SliderSegment.module.css'
import { fetchPlaylist } from "../../api/YouTubeApi";

const endpoint = `https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet%2CcontentDetails&maxResults=10&playlistId=PLk_UmMfvZDx21Z9eEQ9DcIlUfZp1uwEup&key=`

const SliderSegment = () => {
  const [episodes, setEpisodes] = useState([]);

  useEffect(() => {
    Promise.all([
      fetchPlaylist(endpoint)
    ]).then((results) => {
      setEpisodes(results[0]);
    })
  }, []);

  return (
  <div className={styles.shows}>
    {episodes.map(episode =>
      <img key={episode.id} className={styles.showImage} src={episode.snippet.thumbnails.medium.url} alt="" />
    )}
  </div>
)};

export default SliderSegment;