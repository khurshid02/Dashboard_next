import Dashboard from "../containers/dashboard";
import CardsContainer from "../containers/Home/CardsContainer";

export default function Home() {
  return (
    <Dashboard menu={"home"}>
      <CardsContainer />
    </Dashboard>
  );
}
