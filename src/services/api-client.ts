import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "9e8af35f49e04ba281f8f180970a0a9c",
  },
});
