import MainTitle from "../../UI/Titles/MainTitle";
import SubTitle from "../../UI/Titles/SubTitle";
import Phone from "../../../assets/Phone.png";
import Facebook from "../../../assets/facebook.png";
import Twitter from "../../../assets/twitter.png";
import Linkedin from "../../../assets/linkedin.png";
import HomeCTA from "../../UI/Buttons/HomeCTA";

const Footer = () => {
  return (
    <section className="flex flex-col justify-center lg:mt-[9rem] mt-[4rem] w-full">
      <div className="flex justify-evenly ">
        <div className="flex flex-col gap-5 lg:gap-10 mt-[3rem] justify-center lg:justify-start lg:items-start items-center lg:text-left text-center">
          <div className="md:w-[600px] w-[300px]">
            <MainTitle title="Embark on a journey with PillPal—Shaping Tomorrow, Today!" />
          </div>
          <div className="md:w-[500px] w-[300px]">
            <SubTitle title="Get ready for a game-changing experience! Don't miss out on the excitement—sign up to be part of our exclusive launch and be the first to explore the future." />
          </div>
          <div className="flex flex-wrap gap-5 mt-10 justify-center lg:justify-start mb-3 lg:mb-0 text-white">
            <HomeCTA label="Get early access" background="black" />
          </div>
        </div>

        <div className="hidden lg:block">
          <img src={Phone} alt="footer image" className="h-[600px]" />
        </div>
      </div>
      <div className="bg-black h-[360px] mt-7 lg:mt-0">
        <div className="flex text-[#FFFFFF]  justify-evenly pt-8 flex-wrap">
          <div className="flex flex-col gap-5">
            <h4 className="">PillPal</h4>
            <div className="flex lg:gap-3  gap-2">
              <img src={Facebook} alt="social media" className="" />
              <img src={Twitter} alt="social media" className="" />
              <img src={Linkedin} alt="social media" className="" />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <h4>About Us</h4>
            <ul className="flex flex-col gap-2 text-sm">
              <li>How It Works</li>
              <li>About Us</li>
            </ul>
          </div>

          <div className="flex flex-col gap-2">
            <h4>Solutions</h4>
            <ul className="flex flex-col gap-2 text-sm">
              <li>For Patients</li>
              <li>For Providers</li>
            </ul>
          </div>
          <div className=" flex-col gap-2 hidden lg:flex">
            <h4>Have Questions?</h4>
            <ul className="flex flex-col gap-2 text-sm">
              <li>Help</li>
              <li>billpill@mail.com</li>
            </ul>
          </div>
          <div className="flex flex-col gap-2 pt-9 md:pt-0">
            <p className="text-white w-[272px]">
              Want to receive mail on how we improve our care.
            </p>
            <div className="mt-3">
              <input
                type="text"
                placeholder="Enter email address"
                className="bg-[#FCFCFC] p-2 rounded-md w-full"
              />
              <button
                className="bg-[#55AAFF] text-black absolute rounded-md text-sm p-1 
                 lg:right-[10rem] right-[4rem] mt-[7px] "
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
        <div className=" bg-[#B9B7B7] w-[712px] p-[1px] mt-[5rem] ml-16 hidden md:block"></div>
        <p className="text-white md:text-[14px] text-[10px] md:pt-14 pt-8 lg:pl-[7rem] text-center">
          &copy 2023 PillPal. All Rights Reserved
        </p>
      </div>
    </section>
  );
};

export default Footer;
