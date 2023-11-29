import axios from "axios";

const AxiosInstance = axios.create({
  baseURL: "http://localhost:8083/",
});

export default AxiosInstance;
