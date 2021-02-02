import axios from "axios";

const streams = axios.create({
  baseURL: "http://localhost:5000",
});

export default streams;
