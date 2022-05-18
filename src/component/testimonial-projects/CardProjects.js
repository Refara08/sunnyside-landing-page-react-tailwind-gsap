const CardProjects = (props) => {
  return (
    <div>
      <img
        className="anim-top-stgr-4 block md:hidden"
        src={props.imgMobile}
        alt={props.id}
      />
      <img
        className="anim-top-stgr-4 hidden md:block"
        src={props.imgDesktop}
        alt={props.id}
      />
    </div>
  );
};

export default CardProjects;
