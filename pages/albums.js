import Dashboard from "../containers/dashboard";
import AlbumsData from "../containers/Albums/Albums";
const Users = () => {
  return (
    <div>
      <Dashboard menu={"albums"}>
        <AlbumsData />
      </Dashboard>
    </div>
  );
};

export default Users;
