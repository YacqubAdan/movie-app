import axios from "axios";

/** starting URL which will be used to make requests to database. */
const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

export default instance;
