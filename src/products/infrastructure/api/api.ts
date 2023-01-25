import axios from "axios";
export const fetchProducts = (): Promise<any> => {
  return axios.get("https://dummyjson.com/products");
};
