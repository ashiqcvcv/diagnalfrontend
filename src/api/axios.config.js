const { default: axios } = require("axios");

export const axiosClient = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  timeout: 20000,
  headers: {
    "Content-Type": "application/json",
  },
});
