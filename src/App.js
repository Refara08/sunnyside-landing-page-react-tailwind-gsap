import Navigation from "./component/Navigation/Navigation";
import Header from "./component/header/Header";
import About from "./component/about/About";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Header />
      <About />
      <div className="block w-full h-[200vh] bg-black"></div>
    </div>
  );
}

export default App;
