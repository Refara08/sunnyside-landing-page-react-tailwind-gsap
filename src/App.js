import { useRef, useLayoutEffect } from "react";

import Navigation from "./component/Navigation/Navigation";
import Header from "./component/header/Header";
import About from "./component/about/About";
import Services from "./component/services/Services";
import TestimonialProjects from "./component/testimonial-projects/TestimonialProjects";
import Footer from "./component/footer/Footer";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function App() {
  //animasi fade-in function
  const el = useRef();
  const q = gsap.utils.selector(el);

  useLayoutEffect(() => {
    q(".anim-bottom").forEach((bottom) => {
      gsap.fromTo(
        bottom,
        { y: 200 },
        {
          y: 0,
          scrollTrigger: {
            trigger: bottom,
            toggleActions: "restart none none none",
            scrub: 1,
            start: "top bottom",
            end: "bottom 80%",
          },
        }
      );
    });
    q(".anim-top").forEach((top) => {
      gsap.fromTo(
        top,
        { y: -200 },
        {
          y: 0,
          scrollTrigger: {
            trigger: top,
            toggleActions: "restart none none none",
            scrub: 1,
            start: "top bottom",
            end: "bottom 80%",
          },
        }
      );
    });
    gsap.fromTo(
      q(".anim-top-stgr"),
      { y: -100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.33,
        scrollTrigger: {
          trigger: q(".anim-top-stgr"),
          toggleActions: "restart none none none",
          scrub: 1,
          start: "top bottom",
          end: "bottom 55%",
        },
      }
    );
    gsap.fromTo(
      q(".anim-top-stgr-4"),
      { y: -100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.25,
        scrollTrigger: {
          trigger: q(".anim-top-stgr"),
          toggleActions: "restart none none none",
          scrub: 1,
          start: "top bottom",
          end: "bottom top",
        },
      }
    );
    q(".anim-right").forEach((right) => {
      gsap.fromTo(
        right,
        { x: 100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          scrollTrigger: {
            trigger: right,
            toggleActions: "restart none none none",
            scrub: 1,
            start: "top bottom",
            end: "bottom 95%",
          },
        }
      );
    });
    q(".anim-left").forEach((left) => {
      gsap.fromTo(
        left,
        { x: -100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          scrollTrigger: {
            trigger: left,
            toggleActions: "restart none none none",
            scrub: 1,
            start: "top bottom",
            end: "bottom 95%",
          },
        }
      );
    });
  });

  return (
    <div ref={el} className="App">
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
