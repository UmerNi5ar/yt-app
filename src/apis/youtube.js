import axios from "axios";


export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: 'AIzaSyCu7qVt0KlAHHO2rj_ABnvQTaazCTXhw14',
  },
});
