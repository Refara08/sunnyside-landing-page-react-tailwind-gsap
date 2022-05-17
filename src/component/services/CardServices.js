const CardServices = (props) => {
  return (
    <div className="relative">
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
      <div
        className={`${props.textColor} absolute bottom-[8vh] px-8 flex flex-col justify-center items-center gap-6`}
      >
        <h2 className="font-fraunces font-extrabold text-center text-4xl">
          {props.title}
        </h2>
        <p className="text-center font-barlow text-lg font-semibold">
          {props.text}
        </p>
      </div>
    </div>
  );
};

export default CardServices;
