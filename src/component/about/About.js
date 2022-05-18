import CardAbout from "./CardAbout";
import eggMobile from "../../img/mobile/image-transform.jpg";
import eggDesktop from "../../img/desktop/image-transform.jpg";
import glassMobile from "../../img/mobile/image-stand-out.jpg";
import glassDesktop from "../../img/desktop/image-stand-out.jpg";

const content = [
  {
    title: "Transform your brand",
    imgMobile: eggMobile,
    imgDesktop: eggDesktop,
    text: "We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you.",
    button: "Learn more",
    colorAccent: "before:bg-yellow",
    colStart: "row-start-1",
  },
  {
    title: "Stand out to the right audience",
    imgMobile: glassMobile,
    imgDesktop: glassDesktop,
    text: "Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places.",
    button: "Learn more",
    colorAccent: "before:bg-soft-red",
    colStart: "",
  },
];

const About = () => {
  return (
    <div>
      {content.map((item, index) => (
        <CardAbout
          key={index}
          title={item.title}
          text={item.text}
          button={item.button}
          imgMobile={item.imgMobile}
          imgDesktop={item.imgDesktop}
          colorAccent={item.colorAccent}
          colStart={item.colStart}
        />
      ))}
    </div>
  );
};

export default About;
