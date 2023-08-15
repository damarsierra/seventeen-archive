import axios from "axios";

const api_key = import.meta.env.VITE_YOUTUBE_DATA_API_KEY;

export async function fetchPlaylist(endpoint) {
  const { data } = await axios.get(`${endpoint}${api_key}`);
  return data.items;
}