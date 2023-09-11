import axios from "axios";

const api_key = import.meta.env.VITE_YOUTUBE_DATA_API_KEY;

export async function fetchPlaylist(id) {
  const endpoint = `https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet%2CcontentDetails&maxResults=18&playlistId=${id}&key=`;
  const { data } = await axios.get(`${endpoint}${api_key}`);
  return data.items;
}