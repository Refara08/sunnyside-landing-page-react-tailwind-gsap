const CardServices = (props) => {
  return (
    <div
      className={`services-card ${props.imgMobile} ${props.imgDesktop} bg-cover bg-center bg-no-repeat h-[650px] flex flex-col justify-end items-center`}
    >
      <div
        className={`${props.textColor} py-16 px-8 lg:py-24 lg:px-24 xl:px-40`}
      >
        <h2 className="font-fraunces font-extrabold text-center mb-6 text-4xl sm:text-5xl">
          {props.title}
        </h2>
        <p className="text-center font-barlow text-lg sm:text-xl font-semibold">
          {props.text}
        </p>
      </div>
    </div>
  );
};

export default CardServices;
