import Checkbox from "../Inputs/CheckBox";
import TextInput from "../Inputs/TextInput";




const SignupForm = () => {


    return (
      <form className="flex flex-col md:gap-5 gap-3">
      <TextInput placeholder="Enter your first name" type="text" label="Name"/>
      <TextInput placeholder="Enter your email" type="email" label="Email"/>
      <TextInput placeholder="Use at leat 10 character and number" type="password" label="Create password"/>
      <TextInput placeholder="password" type="password" label="Confirm password"/>
      <div className="md:pt-4 pt-2">
      <Checkbox label="Agree to Terms and Policy"/>
      </div>
      <div className="mt-4">
      <button type="submit" className="bg-[#55AAFF] h-[55px] w-full rounded-md">Sign Up </button>
      </div>
      </form>
    );
  };
  
  export default SignupForm;
  