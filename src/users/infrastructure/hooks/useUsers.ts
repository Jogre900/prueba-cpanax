import { useState, useEffect } from "react";
import fetchUsers from "../api/api";
import type { User } from "../../domain/user.model";

const useUsers = () => {
  const [data, setData] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    setLoading(true);
    fetchUsers()
      .then((res) => {
        setLoading(false);
        setData(res.data.users);
      })
      .catch((err) => {
        setLoading(false);
        setError(err.message);
      });
  }, []);

  return { data, loading, error };
};

export default useUsers;
