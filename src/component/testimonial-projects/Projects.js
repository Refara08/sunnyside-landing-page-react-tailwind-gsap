import CardProjects from "./CardProjects";

import coneMobile from "../../img/mobile/image-gallery-cone.jpg";
import milkMobile from "../../img/mobile/image-gallery-milkbottles.jpg";
import orangeMobile from "../../img/mobile/image-gallery-orange.jpg";
import sugarMobile from "../../img/mobile/image-gallery-sugar-cubes.jpg";
import coneDesktop from "../../img/desktop/image-gallery-cone.jpg";
import milkDesktop from "../../img/desktop/image-gallery-milkbottles.jpg";
import orangeDesktop from "../../img/desktop/image-gallery-orange.jpg";
import sugarDesktop from "../../img/desktop/image-gallery-sugarcubes.jpg";

const gallery = [
  {
    id: "milk",
    imgMobile: milkMobile,
    imgDesktop: milkDesktop,
  },
  {
    id: "orange",
    imgMobile: orangeMobile,
    imgDesktop: orangeDesktop,
  },
  {
    id: "cone",
    imgMobile: coneMobile,
    imgDesktop: coneDesktop,
  },
  {
    id: "sugar",
    imgMobile: sugarMobile,
    imgDesktop: sugarDesktop,
  },
];

const Projects = () => {
  return (
    <div className="grid grid-cols-2 md:flex">
      {gallery.map((item) => (
        <CardProjects
          key={item.id}
          imgMobile={item.imgMobile}
          imgDesktop={item.imgDesktop}
        />
      ))}
    </div>
  );
};

export default Projects;
