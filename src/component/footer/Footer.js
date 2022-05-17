import facebook from "../../img/icon-facebook.svg";
import instagram from "../../img/icon-instagram.svg";
import twitter from "../../img/icon-twitter.svg";
import pinterest from "../../img/icon-pinterest.svg";

const Footer = () => {
  return (
    <div className="bg-dark-moderate-cyan text-dark-desaturated-cyan flex flex-col justify-evenly items-center gap-12 py-24">
      <h1 className="text-5xl font-extrabold font-barlow">sunnyside</h1>
      <div className="text-2xl opacity-70 font-bold flex flex-row justify-evenly w-full">
        <a href="/">About</a>
        <a href="/">Services</a>
        <a href="/">Projects</a>
      </div>
      <div className="flex flex-row justify-evenly items-center w-[50%] mt-12">
        <img className="w-7" src={facebook} alt="facebook" />
        <img className="w-7" src={instagram} alt="instagram" />
        <img className="w-7" src={twitter} alt="twitter" />
        <img className="w-7" src={pinterest} alt="pinterest" />
      </div>
    </div>
  );
};

export default Footer;
