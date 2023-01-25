import useUsers from "../hooks/useUsers";

const Users = (): JSX.Element => {
  const { data, loading, error } = useUsers();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Oops! Something wrong...</div>;
  }

  return (
    <>
      <h1>List of users</h1>
    </>
  );
};

export default Users;
