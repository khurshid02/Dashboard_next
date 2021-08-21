import Dashboard from "../containers/dashboard";
import TodosData from "../containers/Todos/Todos";

const Users = () => {
  return (
    <div>
      <Dashboard menu={"todos"}>
        <TodosData />
      </Dashboard>
    </div>
  );
};

export default Users;
