import ButtonGradiant from "./assets/svg/ButtonGradient";
import Button from "./components/Button";
import Header from "./components/Header";

const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.35rem] overflow-hidden">
        <Header />
      </div>
      <ButtonGradiant />
    </>
  );
};

export default App;
