import axios from "axios";
const fetchUsers = (): Promise<any> => {
  return axios.get("https://dummyjson.com/users");
};

export default fetchUsers;
