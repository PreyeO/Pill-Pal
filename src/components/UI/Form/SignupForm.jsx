import { useNavigate } from "react-router-dom";
import Checkbox from "../Inputs/CheckBox";
import TextInput from "../Inputs/TextInput";
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';




const SignupForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password_confirmation, setPassword_confirmation] = useState("");
  const navigate = useNavigate();

  const handleSubmitBtn = async (e) => {
    e.preventDefault();

    let register = { name, email, password, password_confirmation };

    try {
      const response = await fetch("https://pillpal-api.pouletmedia.ng/api/users", {
        method: "POST",
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(register)
      });

      if (response.ok) {
        toast.success("Registered Successfully");

        // Delay the navigation slightly after the toast is displayed
        setTimeout(() => {
          navigate("/login");
        }, 1000); // You can adjust the delay time as needed
      } else {
        const errorData = await response.json();
        toast.error(`Failed: ${errorData.message}`);
      }
    } catch (err) {
      console.error(err);
      toast.error(`Failed: ${err.message}`);
    }
  };

    return (
      <form className="flex flex-col md:gap-5 gap-3" onSubmit={handleSubmitBtn}>
      <TextInput placeholder="Enter your first name" type="text" 
      label="Name" value={name} onChange={e=> setName(e.target.value)} required/>
      <TextInput placeholder="Enter your email" 
      type="email" label="Email" value={email} onChange={e=> setEmail(e.target.value)} required/>
      <TextInput placeholder="Enter your password" 
      type="password" label="Create password" value={password} onChange={e=> setPassword(e.target.value)} required/>
      <TextInput placeholder="password" type="password" 
      label="Confirm password" value={password_confirmation} onChange={e=> setPassword_confirmation(e.target.value)} required/>
      <div className="md:pt-4 pt-2">
      <Checkbox label="Agree to Terms and Policy"/>
      </div>
      {/* <Link to="/providerdashboard"> */}
      <div className="mt-4">
      <button type="submit" className="bg-[#55AAFF] h-[55px] w-full rounded-md">Sign Up </button>
      </div>
      {/* </Link> */}
      <ToastContainer />
      </form>
    );
  };
  
  export default SignupForm;
  