import CardServices from "./CardServices";

import cherryMobile from "../../img/mobile/image-graphic-design.jpg";
import cherryDesktop from "../../img/desktop/image-graphic-design.jpg";
import orangeMobile from "../../img/mobile/image-photography.jpg";
import orangeDesktop from "../../img/desktop/image-photography.jpg";

const content = [
  {
    title: "Graphic Design",
    imgMobile: cherryMobile,
    imgDesktop: cherryDesktop,
    text: "Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’ attention.",
    textColor: "text-dark-desaturated-cyan",
  },
  {
    title: "Photography",
    imgMobile: orangeMobile,
    imgDesktop: orangeDesktop,
    text: "Increase your credibility by getting the most stunning, high-quality photos that improve your business image.",
    textColor: "text-dark-blue",
  },
];

const Services = () => {
  return (
    <div>
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
