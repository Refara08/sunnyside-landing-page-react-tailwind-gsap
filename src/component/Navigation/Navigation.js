import { useRef, useState } from "react";
import gsap from "gsap";
import * as ReactDOM from "react-dom";

const Navigation = () => {
  const navContainer = document.getElementById("nav");
  const hamburgerRef = useRef();
  const q = gsap.utils.selector(hamburgerRef);

  const [isHamburgerActive, setIsHamburgerActive] = useState(false);

  const tl = gsap.timeline();

  const toggleHamburger = () => {
    setIsHamburgerActive((prev) => !prev);

    if (!isHamburgerActive) {
      tl.to(q(".line1"), { yPercent: 400 })
        .to(q(".line2"), { opacity: 0 }, "<")
        .to(q(".line3"), { yPercent: -400 }, "<")
        .to(q(".line1"), { yPercent: 400, rotate: 45 }, "<.5")
        .to(q(".line3"), { yPercent: -400, rotate: 135 }, "<");
    } else {
      tl.to(q(".line3"), { yPercent: -400, rotate: 0 })
        .to(q(".line1"), { yPercent: 400, rotate: 0 }, "<")
        .to(q(".line3"), { yPercent: 0 }, "<.5")
        .to(q(".line2"), { opacity: 1 }, "<")
        .to(q(".line1"), { yPercent: 0 }, "<");
    }
  };

  return (
    <>
      {ReactDOM.createPortal(
        <div className="flex flex-row justify-between items-center px-4 fixed top-0 left-0 w-full h-[70px] z-40">
          <h3 className="text-3xl text-white font-bold font-barlow">
            sunnyside
          </h3>
          <nav>
            <div
              ref={hamburgerRef}
              // onClick={!isHamburgerActive ? openHamburger : closeHamburger}
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
    </>
  );
};

export default Navigation;
