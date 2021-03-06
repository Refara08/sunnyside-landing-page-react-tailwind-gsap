import CardTestimonial from "./CardTestimonial";

import emilyImg from "../../img/image-emily.jpg";
import jennieImg from "../../img/image-jennie.jpg";
import thomasImg from "../../img/image-thomas.jpg";

const content = [
  {
    text: "We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.",
    clientName: "Emily R.",
    clientPosition: "Marketing Director",
    imageAvatar: emilyImg,
  },
  {
    text: "Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience.",
    clientName: "Thomas S.",
    clientPosition: "Chief Operating Officer",
    imageAvatar: jennieImg,
  },
  {
    text: "Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!",
    clientName: "Jennie F.",
    clientPosition: "Business Owner",
    imageAvatar: thomasImg,
  },
];

const Testimonial = () => {
  return (
    <div className="py-20 overflow-hidden">
      <h2 className="text-center font-fraunces uppercase font-extrabold text-xl md:text-2xl tracking-[0.25em] text-grayish-blue mb-20 z-10 anim-top">
        Client Testimonials
      </h2>
      <div className="md:grid md:grid-cols-3 md:gap-4 md:px-10 lg:px-28">
        {content.map((item, index) => (
          <CardTestimonial
            key={index}
            text={item.text}
            clientName={item.clientName}
            clientPosition={item.clientPosition}
            imageAvatar={item.imageAvatar}
          />
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
