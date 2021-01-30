import axios from "axios";

const streams = axios.create({
  baseURL: "http://localhost:8000",
});

export default streams;
