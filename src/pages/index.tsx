import Header from "./header";
import { Home as HomeComponent } from "./components/home";
import { Benefits as BenefitsComponent } from "./components/benefits";

export default function Home() {
  return (
    <div className="bg-[url('/bg.svg')] h-full bg-cover bg-no-repeat flex flex-col">
      <Header />
      <HomeComponent />
    </div>
  );
}
