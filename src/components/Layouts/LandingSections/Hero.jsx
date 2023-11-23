import HomeCTA from "../../UI/Buttons/HomeCTA";
import MainTitle from "../../UI/Titles/MainTitle";
import SubTitle from "../../UI/Titles/SubTitle";
import Provider from "../../../assets/Provider.svg";
import Patient from "../../../assets/Patient.png";
import BannerImage from "../../../assets/BannerImage.svg";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="flex flex-col justify-center mt-12 lg:mt-4 w-full mb-10">
      <div className="flex lg:justify-center lg:items-center flex-wrap">
        <div className="w-[530px] lg:mr-12 order-2 flex-shrink-0 lg:order-[-2] mx-auto lg:mx-0 mt-[6rem] lg:mt-0 ">
          <img src={BannerImage} alt="banner image" className="" />
        </div>
        <div className=" flex flex-col md:w-[540px] w-[300px] mx-auto lg:mx-0 text-center lg:text-left justify-center
        lg:justify-start order-1 flex-shrink-0 lg:order-[-1] items-center lg:items-start">
          <MainTitle title="Empowering Medication Management for All" />
          <div className="pt-4 lg:pt-0">
            <SubTitle title="PillPal bridges the gap between patients and professionals, ensuring seamless collaboration for optimal medication adherence and well-being." />
          </div>
          <div className="flex flex-wrap gap-8 lg:gap-5 mt-10 justify-center lg:justify-start">
            <Link to="/signup">
            <HomeCTA
              label="Provider"
              background="#55AAFF"
              color="#1A1A1A"
              src={Provider}
              type="submit"
            />
            </Link>
            <Link to="/signup">
            <HomeCTA
              label="Patient"
              background="#1A1A1A"
              color="#FCFCFC"
              src={Patient}
              type="submit"
            />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
