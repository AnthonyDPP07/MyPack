import axios from "axios";

const url = `Https://courierdemo.azurewebsites.net/api`;

const axiosClient = axios.create({
  baseURL: url,
});

export default axiosClient;
