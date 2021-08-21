import Dashboard from "../containers/dashboard";
import UsersData from "../containers/users/Users";
const Users = () => {
  return (
    <div>
      <Dashboard menu={"users"}>
        <UsersData />
      </Dashboard>
    </div>
  );
};

export default Users;
