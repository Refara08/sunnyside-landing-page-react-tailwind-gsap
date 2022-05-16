import iconArrowDownMobile from "../../img/icon-arrow-down.svg";

const Header = (props) => {
  return (
    <header className="container mx-auto">
      <div className="header-content h-[680px] flex flex-col justify-center items-center gap-12">
        <h1 className="text-5xl font-bold text-center text-white font-fraunces uppercase tracking-widest">
          we are creatives
        </h1>
        <div className="">
          <img src={iconArrowDownMobile} alt="arrow down icon" />
        </div>
      </div>
    </header>
  );
};

export default Header;
