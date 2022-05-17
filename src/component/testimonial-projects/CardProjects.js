const CardProjects = (props) => {
  return (
    <div>
      <img className="block md:hidden" src={props.imgMobile} alt={props.id} />
      <img className="hidden md:block" src={props.imgDesktop} alt={props.id} />
    </div>
  );
};

export default CardProjects;
