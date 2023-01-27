import { useState, useMemo } from "react";
import useUsers from "../hooks/useUsers";
import UserTable from "../components/userTable/userTable";
import SearchInput from "../components/searchInput/searchInput";
import Heading from "../../../config/layout/heading/heading";
const Users = (): JSX.Element => {
  const { data, loading, error } = useUsers();
  const [text, setText] = useState<string>("");

  const filtered = useMemo(
    () =>
      data.filter(
        (u) =>
          u.firstName.toLocaleLowerCase().includes(text.toLocaleLowerCase()) ||
          u.lastName.toLocaleLowerCase().includes(text.toLocaleLowerCase())
      ),
    [text, data]
  );

  console.log("users---", data);
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Oops! Something wrong...</div>;
  }

  return (
    <>
      <Heading className="mb-3" title="List of Users" />
      <div className="flex justify-content-start">
        <SearchInput className="mb-3" value={text} onChange={(e) => setText(e.target.value)} />
      </div>
      <UserTable data={filtered} />
    </>
  );
};

export default Users;
