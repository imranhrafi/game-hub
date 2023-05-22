import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "40cc017f769f439e8d12f257a1c4c1e6",
  },
});
