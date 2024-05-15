import ButtonGradiant from "./assets/svg/ButtonGradient";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Benefits from "./components/Benefits";

const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.35rem] overflow-hidden">
        <Header />
        <Hero />
        <Benefits />
      </div>
      <ButtonGradiant />
    </>
  );
};

export default App;
