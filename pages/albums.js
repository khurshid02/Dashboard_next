import Dashboard from "../containers/Dashboard";
import AlbumsData from "../containers/Albums/Albums";
const Users = () => {
  return (
    <div>
      <Dashboard menu={"users"}>
        <AlbumsData />
      </Dashboard>
    </div>
  );
};

export default Users;
