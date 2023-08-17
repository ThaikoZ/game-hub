import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "03cb9fb952f84bb1ae30f9e24052b1d1",
  },
});
