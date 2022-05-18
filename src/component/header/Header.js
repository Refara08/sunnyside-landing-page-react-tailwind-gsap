import iconArrowDownMobile from "../../img/icon-arrow-down.svg";

const Header = (props) => {
  const style = {
    headerContent:
      "container mx-auto h-[680px] flex flex-col justify-center items-center gap-12",
    headerText:
      "text-5xl md:text-6xl font-bold text-center text-white font-fraunces uppercase tracking-widest px-10 md:mb-10 md:tracking-[0.15em]",
  };

  return (
    <header className="header">
      <div className={style.headerContent}>
        <h1 className={style.headerText}>we are creatives</h1>
        <a href="/" className="">
          <img src={iconArrowDownMobile} alt="arrow down icon" />
        </a>
      </div>
    </header>
  );
};

export default Header;
