import Header from "./header";
import HomeComponent from "./components/home";

export default function Home() {
  return (
    <div className="bg-[url('/bg.svg')] h-full bg-cover bg-no-repeat flex flex-col">
      <Header />
      <HomeComponent />
    </div>
  );
}
