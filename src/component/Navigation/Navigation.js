import * as ReactDOM from "react-dom";

const Navigation = () => {
  const navContainer = document.getElementById("nav");

  return (
    <>
      {ReactDOM.createPortal(
        <div className="flex flex-row justify-between items-center px-4 fixed top-0 left-0 w-full h-[70px] z-40">
          <h3 className="text-3xl text-white font-bold">sunnyside</h3>
          <nav>
            <div className="hamburger">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </nav>
        </div>,
        navContainer
      )}
    </>
  );
};

export default Navigation;
