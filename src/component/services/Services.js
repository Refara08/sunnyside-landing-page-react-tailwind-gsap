import CardServices from "./CardServices";

const content = [
  {
    title: "Graphic Design",
    imgMobile: "bg-graphic-mobile",
    imgDesktop: "md:bg-graphic-desktop",
    text: "Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’ attention.",
    textColor: "text-dark-desaturated-cyan",
  },
  {
    title: "Photography",
    imgMobile: "bg-photography-mobile",
    imgDesktop: "md:bg-photography-desktop",
    text: "Increase your credibility by getting the most stunning, high-quality photos that improve your business image.",
    textColor: "text-dark-blue",
  },
];

const Services = () => {
  return (
    <div className="sm:grid sm:grid-cols-2">
      {content.map((item, index) => (
        <CardServices
          key={index}
          title={item.title}
          imgMobile={item.imgMobile}
          imgDesktop={item.imgDesktop}
          text={item.text}
          textColor={item.textColor}
        />
      ))}
    </div>
  );
};

export default Services;
