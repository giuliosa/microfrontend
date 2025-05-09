import HeroCard from "./components/hero-card";
import UsersCard from "./components/users-card";
import WaterCard from "./components/water-card";

export default function Root(props) {
  return (
    <section>
      <HeroCard></HeroCard>
      <UsersCard></UsersCard>
      <WaterCard></WaterCard>
    </section>
  );
}
