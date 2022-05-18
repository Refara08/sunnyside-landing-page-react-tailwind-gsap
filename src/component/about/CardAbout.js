const CardAbout = (props) => {
  return (
    <div className="md:grid md:grid-cols-2">
      <div className="overflow-hidden">
        <img
          className="anim-top block md:hidden"
          src={props.imgMobile}
          alt={props.title}
        />
        <img
          className="anim-top hidden md:block md:object-cover h-full xl:h-auto xl:w-full"
          src={props.imgDesktop}
          alt={props.title}
        />
      </div>
      <div
        className={`${props.anim} py-16 px-10 flex flex-col justify-center items-center md:items-start md:max-w-2xl md:mx-auto gap-8 md:gap-16 ${props.colStart}`}
      >
        <h2 className="font-fraunces font-extrabold text-center text-4xl text-very-dark-desaturated-blue md:text-left md:text-6xl">
          {props.title}
        </h2>
        <p className="text-center font-barlow text-lg text-dark-grayish-blue md:text-left md:text-xl">
          {props.text}
        </p>
        <button
          className={`uppercase font-fraunces text-very-dark-desaturated-blue font-extrabold md:text-xl relative px-3 hover:before:bg-opacity-80 before:absolute before:bottom-0 before:left-0 before:h-[10px] before:w-full ${props.colorAccent} before:bg-opacity-40 before:transition before:duration-300 before:ease-linear before:-z-10 before:rounded-full`}
        >
          {props.button}
        </button>
      </div>
    </div>
  );
};

export default CardAbout;
