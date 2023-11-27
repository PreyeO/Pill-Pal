import { useState } from "react";
import TextInput from "../Inputs/TextInput";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const loginData = { email, password };

    try {
      const response = await fetch("https://pillpal-api.pouletmedia.ng/api/login", {
        method: "POST",
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(loginData)
      });

      if (response.ok) {
        const { token, user } = await response.json();

        localStorage.setItem("userToken", token);
        localStorage.setItem("userName", user.name);

        toast.success('Login successfully');
        
      
        setTimeout(() => {
          navigate("/userdashboard");
        }, 1000); 
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
    <form className="flex flex-col md:gap-5 gap-3" onSubmit={handleSubmit}>
      <TextInput
        placeholder="Enter your email"
        type="email"
        label="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <TextInput
        placeholder="Enter your password"
        type="password"
        label="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <div className="mt-4">
        <button type="submit" className="bg-[#55AAFF] h-[55px] w-full rounded-md">
          Login
        </button>
      </div>
      <ToastContainer />
    </form>
  );
};

export default LoginForm;
