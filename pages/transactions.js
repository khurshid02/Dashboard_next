import CardDashboard from "../containers/CardDashboard/CardDashboard";
import Transactions from "../containers/Transactions/Transactions";

export default function Home() {
  return (
    <CardDashboard menu={"transactions"}>
      <Transactions />
    </CardDashboard>
  );
}
