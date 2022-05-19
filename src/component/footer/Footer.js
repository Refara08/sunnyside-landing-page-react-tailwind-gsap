import IconFacebook from "../../img/icon-facebook.js";
import IconInstagram from "../../img/icon-instagram.js";
import IconTwitter from "../../img/icon-twitter.js";
import IconPinterest from "../../img/icon-pinterest.js";
import IconCodepen from "../../img/icon-codepen.js";
import IconGithub from "../../img/icon-github.js";

const Footer = () => {
  return (
    <div className="bg-dark-moderate-cyan text-dark-desaturated-cyan ">
      <div className="flex flex-col justify-evenly items-center gap-12 py-24 md:max-w-4xl md:mx-auto">
        <h1 className="text-5xl font-extrabold font-barlow">sunnyside</h1>
        <div className="text-2xl opacity-70 font-bold flex flex-row justify-evenly w-full">
          <a
            className="hover:text-white transition duration-300 ease-linear"
            href="/"
          >
            About
          </a>
          <a
            className="hover:text-white transition duration-300 ease-linear"
            href="/"
          >
            Services
          </a>
          <a
            className="hover:text-white transition duration-300 ease-linear"
            href="/"
          >
            Projects
          </a>
        </div>
        <div className="flex flex-row justify-evenly items-center w-[50%] mt-12">
          <IconFacebook
            size="1.75rem"
            className="hover:text-white transition duration-300 ease-linear"
          />
          <IconInstagram
            size="1.75rem"
            className="hover:text-white transition duration-300 ease-linear"
          />
          <IconPinterest
            size="1.75rem"
            className="hover:text-white transition duration-300 ease-linear"
          />
          <a
            href="https://twitter.com/GRefantero"
            target={"_blank"}
            rel="noreferrer"
          >
            <IconTwitter
              size="1.75rem"
              className="hover:text-white transition duration-300 ease-linear"
            />
          </a>
          <a
            href="https://codepen.io/refantero"
            target={"_blank"}
            rel="noreferrer"
          >
            <IconCodepen
              size="1.75rem"
              className="hover:text-white transition duration-300 ease-linear"
            />
          </a>
          <a
            href="https://github.com/Refara08"
            target={"_blank"}
            rel="noreferrer"
          >
            <IconGithub
              size="1.75rem"
              className="hover:text-white transition duration-300 ease-linear"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
