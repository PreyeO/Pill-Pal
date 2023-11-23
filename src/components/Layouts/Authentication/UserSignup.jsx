import SignupForm from "../../UI/Form/SignupFom";
import AuthImage from "../../../assets/Polygon.png"
import SubTitle from "../../UI/Titles/SubTitle";
import MainTitle from "../../UI/Titles/MainTitle";


const UserSignup = () => {
  return (
    <section className="flex h-screen bg-[#FCFCFC] items-center">
        <div className="mx-auto mt-12 hidden flex-1 lg:flex justify-center">
            <img src={AuthImage} alt="login image" className="w-[600px] h-[600px]"/>   
      </div>
      <div className="flex-1 mt-6 md:mt-7 justify-center items-center">
        <div className="mx-[2rem] lg:mx-[7rem] ">
        <div className="flex-col justify-center text-center w-[314px] center gap-3 ">
           <MainTitle title="Create An Account"  />
           <SubTitle title="Home To Excellent Care."/>
           </div>
           <div className="mt-4">
      <SignupForm />
      </div>
      <div className="pt-2 md:pt4 text-center pb-2">
           <h5>Have an account?<span className="text-[#55AAFF] cursor-pointer"> Login </span></h5>
           </div>
      </div>
      </div>
    </section>
  );
};

export default UserSignup 
