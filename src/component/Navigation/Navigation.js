import { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import * as ReactDOM from "react-dom";

const Navigation = () => {
  const navContainer = document.getElementById("nav");
  const hamburgerRef = useRef();
  const mobileNavRef = useRef();
  const q = gsap.utils.selector(hamburgerRef);

  const [isHamburgerActive, setIsHamburgerActive] = useState(false);

  const tl = gsap.timeline();

  const toggleHamburger = () => {
    setIsHamburgerActive((prev) => !prev);

    if (!isHamburgerActive) {
      tl.to(mobileNavRef.current, {
        yPercent: 150,
        opacity: 1,
        ease: "power3.out",
      })
        .to(q(".line1"), { yPercent: 400 }, "<")
        .to(q(".line2"), { opacity: 0 }, "<")
        .to(q(".line3"), { yPercent: -400 }, "<")
        .to(q(".line1"), { yPercent: 400, rotate: 90 }, "<.5")
        .to(q(".line1"), { yPercent: 400, rotate: 135 }, "<.5")
        .to(q(".line3"), { yPercent: -400, rotate: 45 }, "<");
    } else {
      tl.to(q(".line3"), { yPercent: -400, rotate: 0 })
        .to(q(".line1"), { yPercent: 400, rotate: 90 }, "<")
        .to(q(".line1"), { yPercent: 400, rotate: 0 }, "<.5")
        .to(q(".line3"), { yPercent: 0 }, "<.5")
        .to(q(".line2"), { opacity: 1 }, "<")
        .to(q(".line1"), { yPercent: 0 }, "<")
        .to(
          mobileNavRef.current,
          { yPercent: 0, opacity: 0, ease: "power3.in" },
          "<"
        );
    }
  };

  //nav bg opacity
  const [bgOpacity, setBgOpacity] = useState("bg-opacity-0");

  useEffect(() => {
    document.addEventListener("scroll", () => {
      if (window.scrollY > 150) {
        setBgOpacity("bg-opacity-30");
      } else {
        setBgOpacity("bg-opacity-0");
      }
    });
  });

  return (
    <>
      {ReactDOM.createPortal(
        <div
          className={`flex flex-row justify-between items-center px-7 fixed top-0 left-0 w-full h-[70px] md:h-[120px] z-40 bg-black transition duration-300 ease-linear ${bgOpacity}`}
        >
          <h3 className="text-3xl sm:text-4xl text-white font-bold font-barlow">
            sunnyside
          </h3>
          <nav>
            <div
              ref={hamburgerRef}
              onClick={toggleHamburger}
              className="hamburger"
            >
              <span className="line1"></span>
              <span className="line2"></span>
              <span className="line3"></span>
            </div>
            <div className="desktop-links">
              <a href="/">About</a>
              <a href="/">Services</a>
              <a href="/">Projects</a>
              <a className="active" href="/">
                Contact
              </a>
            </div>
          </nav>
        </div>,
        navContainer
      )}
      {ReactDOM.createPortal(
        <div ref={mobileNavRef} className="nav-mobile">
          <div className="nav-mobile-triangle" />
          <div className="mobile-links">
            <a href="/">About</a>
            <a href="/">Services</a>
            <a href="/">Projects</a>
            <a className="active" href="/">
              Contact
            </a>
          </div>
        </div>,
        navContainer
      )}
    </>
  );
};

export default Navigation;
