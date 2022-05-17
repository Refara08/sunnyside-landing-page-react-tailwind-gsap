const CardAbout = (props) => {
  return (
    <div>
      <div>
        <img
          className="block md:hidden"
          src={props.imgMobile}
          alt={props.title}
        />
        <img
          className="hidden md:block"
          src={props.imgDesktop}
          alt={props.title}
        />
      </div>
      <div className="py-16 px-10 flex flex-col justify-center items-center gap-8">
        <h2 className="font-fraunces font-extrabold text-center text-4xl text-very-dark-desaturated-blue">
          {props.title}
        </h2>
        <p className="text-center font-barlow text-lg text-dark-grayish-blue">
          {props.text}
        </p>
        <button
          className={`uppercase font-fraunces text-very-dark-desaturated-blue font-extrabold relative px-3 hover:before:bg-opacity-40 before:absolute before:bottom-0 before:left-0 before:h-[10px] before:w-full ${props.colorAccent} before:bg-opacity-0 before:transition before:duration-300 before:ease-linear before:-z-10 before:rounded-full`}
        >
          {props.button}
        </button>
      </div>
    </div>
  );
};

export default CardAbout;
