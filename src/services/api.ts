import axios from "axios";

const api = axios.create({
  baseURL: "http://192.168.100.10:3333",
  // use same ip as expo metro bundler
  // check ip in package.json, it has to be the same here to work
});

export default api;