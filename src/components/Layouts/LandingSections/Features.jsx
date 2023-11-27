import MainTitle from "../../UI/Titles/MainTitle";
import SubTitle from "../../UI/Titles/SubTitle";
import DrugsImage from "../../../assets/DrugsImage.svg";
import { HashLink as Link } from "react-router-hash-link";

const Features = () => {
  return (
    <section className="flex flex-col justify-center mt-[7rem] w-full mb-4">
      <div className=" text-center">
        <MainTitle title="How You Get Better" />
      </div>
      <div className="flex justify-center mt-12 gap-16 flex-wrap lg:flex-nowrap">
        <div className="flex">
          <div className="mr-12 lg:flex hidden">
            <img src={DrugsImage} alt="banner image" className="h-[600px] " />
          </div>
          <div className=" flex flex-col gap-3 lg:px-12 justify-center items-center">
            <div className="w-[300px] mx-auto lg:mx-0 text-center lg:text-left">
              <MainTitle title="Easy Monitoring, Better Health" />
              <SubTitle title="Elevate your health journey effortlessly with PillPal’s easy tracking, paving the way for a healthier and more vibrant life ahead." />
            </div>

            <div className=" mt-8 mr-16 lg:flex hidden">
              <Link to="#hero" smooth>
                <button
                  type="submit"
                  className="rounded-md p-2  w-[225px] h-[60px] flex gap-2 justify-center items-center bg-[#55AAFF] text-[#1A1A1A] "
                >
                  Get Started
                </button>
              </Link>
            </div>
          </div>
        </div>

        <div className="flex gap-3">
          <div className="lg:w-[70px] w-[80px] bg-[#B6DAFF] rounded-md text-center rotate-180 text-black ">
            <h3 className="rotate-90 py-[5rem]">Stay On Schedule</h3>
          </div>
          <div className="lg:w-[70px] w-[80px] bg-[#1A1A1A] rounded-md text-[#FCFCFC]  rotate-180">
            <h3 className="rotate-90 py-[5rem]">Stay On Schedule</h3>
          </div>
          <div className="lg:w-[70px] w-[80px] bg-[#4EFF8A] rounded-md text-black  rotate-180">
            <h3 className="rotate-90 py-[5rem]">Medication Details Entry</h3>
          </div>
        </div>
        <div className="  lg:hidden flex">
          <button
            type="submit"
            className="rounded-md p-2  w-[225px] h-[60px] flex gap-2 justify-center items-center bg-[#55AAFF] text-[#1A1A1A] "
          >
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
};

export default Features;
