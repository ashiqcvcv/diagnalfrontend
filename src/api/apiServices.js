import { axiosClient } from "./axios.config";
import { URLS } from "./endpoints";

export const getBooks = (pageno) => {
  return axiosClient.get(URLS.GET_BOOKS, { params: { no: pageno } });
};
