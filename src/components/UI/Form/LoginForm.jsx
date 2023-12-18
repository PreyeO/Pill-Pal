import { useState } from "react";
import TextInput from "../Inputs/TextInput";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const fetchUserSchedule = async (token) => {
    try {
      const response = await fetch(
        "https://pillpal-api.pouletmedia.ng/api/mySchedule",
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.ok) {
        const data = await response.json();
        return data;
      } else {
        const errorData = await response.json();
        throw new Error(`Failed to fetch schedule: ${errorData.message}`);
      }
    } catch (error) {
      console.error(error);
      throw new Error(`Failed to fetch schedule: ${error.message}`);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const loginData = { email, password };

    try {
      const response = await fetch(
        "https://pillpal-api.pouletmedia.ng/api/login",
        {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(loginData),
        }
      );

      if (response.ok) {
        const { token, user } = await response.json();

        localStorage.setItem("userToken", token);
        localStorage.setItem("userName", user.name);

        toast.success("Login successfully");

        // Check if the user has the role of an administrator
        const isAdmin = user.roles.some((role) => role.slug === "admin");

        if (isAdmin) {
          navigate("/providerdashboard");
        } else {
          // Fetch the user's schedule separately
          try {
            const scheduleData = await fetchUserSchedule(token);

            // Check if the user has a schedule
            const hasSchedule = scheduleData && scheduleData.length > 0;

            if (hasSchedule) {
              // Redirect to "/userdashboard" immediately if there's a schedule
              navigate("/userdashboard");
            } else {
              // Redirect to "/emptyuser" if there's no schedule
              navigate("/emptyuser");
            }
          } catch (scheduleError) {
            console.error(scheduleError);
            toast.error(scheduleError.message);
          }
        }
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
        className="w-full"
      />
      <TextInput
        placeholder="Enter your password"
        type="password"
        label="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
        className="w-full"
      />
      <div className="mt-4">
        <button
          type="submit"
          className="bg-[#55AAFF] h-[55px] w-full rounded-md"
        >
          Login
        </button>
      </div>
      <ToastContainer />
    </form>
  );
};

export default LoginForm;
