import { useRef, useState } from "react";
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
        .to(q(".line1"), { yPercent: 400, rotate: 45 }, "<.5")
        .to(q(".line3"), { yPercent: -400, rotate: 135 }, "<");
    } else {
      tl.to(q(".line3"), { yPercent: -400, rotate: 0 })
        .to(q(".line1"), { yPercent: 400, rotate: 0 }, "<")
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

  return (
    <>
      {ReactDOM.createPortal(
        <div className="flex flex-row justify-between items-center px-7 fixed top-0 left-0 w-full h-[70px] z-40">
          <h3 className="text-3xl text-white font-bold font-barlow">
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
