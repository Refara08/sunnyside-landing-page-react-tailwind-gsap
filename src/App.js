import Navigation from "./component/Navigation/Navigation";
import Header from "./component/header/Header";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Header />
      <div className="block w-full h-[200vh] bg-black"></div>
    </div>
  );
}

export default App;
