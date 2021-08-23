import CardDashboard from "../containers/CardDashboard/CardDashboard";
import Overview from "../containers/Overview/Overview";

export default function Home() {
  return (
    <CardDashboard menu={"overview"}>
      <Overview />
    </CardDashboard>
  );
}
