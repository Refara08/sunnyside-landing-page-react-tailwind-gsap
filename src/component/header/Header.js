import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";

import iconArrowDownMobile from "../../img/icon-arrow-down.svg";

const style = {
  headerContent:
    "container mx-auto h-[680px] flex flex-col justify-center items-center gap-12",
  headerText:
    "anim-down text-5xl md:text-6xl font-bold text-center text-white font-fraunces uppercase tracking-widest px-10 md:mb-10 md:tracking-[0.15em]",
};

const Header = () => {
  const headerContentRef = useRef();
  const q = gsap.utils.selector(headerContentRef);

  useLayoutEffect(() => {
    gsap.fromTo(
      q(".anim-down"),
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 2, stagger: 0.55 }
    );
  });

  return (
    <header className="header">
      <div ref={headerContentRef} className={style.headerContent}>
        <h1 className={style.headerText}>we are creatives</h1>
        <a href="/" className="anim-down">
          <img src={iconArrowDownMobile} alt="arrow down icon" />
        </a>
      </div>
    </header>
  );
};

export default Header;
