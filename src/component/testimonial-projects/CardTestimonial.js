const CardTestimonial = (props) => {
  return (
    <div className="flex flex-col justify-evenly items-center gap-6 px-8 text-center mb-2 anim-top-stgr">
      <div className="w-[90px] aspect-square rounded-full overflow-hidden">
        <img src={props.imageAvatar} alt={props.clientName} />
      </div>
      <p className="text-xl font-semibold text-very-dark-grayish-blue">
        {props.text}
      </p>
      <div>
        <h2 className="text-2xl font-fraunces font-bold text-very-dark-desaturated-blue mb-2">
          {props.clientName}
        </h2>
        <h3 className="font-semibold text-lg font-barlow text-grayish-blue">
          {props.clientPosition}
        </h3>
      </div>
    </div>
  );
};

export default CardTestimonial;
