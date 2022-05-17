import Navigation from "./component/Navigation/Navigation";
import Header from "./component/header/Header";
import About from "./component/about/About";
import Services from "./component/services/Services";
import TestimonialProjects from "./component/testimonial-projects/TestimonialProjects";
import Footer from "./component/footer/Footer";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Header />
      <About />
      <Services />
      <TestimonialProjects />
      <Footer />
    </div>
  );
}

export default App;
