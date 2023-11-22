import HomeCTA from "../../UI/Buttons/HomeCTA"
import MainTitle from "../../UI/Titles/MainTitle"
import SubTitle from "../../UI/Titles/SubTitle" 
import Provider  from "../../../assets/Provider.svg" 
import Patient  from "../../../assets/Patient.png" 
import BannerImage  from "../../../assets/BannerImage.svg"



const Hero = () => {




    return(
        <section className="flex flex-col justify-center mt-4 w-full mb-10">
            <div className="flex lg:justify-center lg:items-center flex-wrap">
            <div className="w-[530px] mr-12">
            <img src={BannerImage} alt="banner image" className=""/>
            </div>
            <div className=" flex-col w-[540px]  text-center lg:text-left justify-center lg:justify-start">
            <MainTitle title="Empowering Medication Management for All"/>
            <div className="">
            <SubTitle title="PillPal bridges the gap between patients and professionals, ensuring seamless collaboration for optimal medication adherence and well-being."/>
            </div>
            <div className="flex flex-wrap gap-5 mt-10 justify-center lg:justify-start">
            <HomeCTA label="Provider" background="#55AAFF" color="#1A1A1A" src={Provider} type="submit"/>
            <HomeCTA label="Patient" background="#1A1A1A" color="#FCFCFC" src={Patient} type="submit" />
            </div>
            </div>
            </div>
        </section>
    )
}

export default Hero