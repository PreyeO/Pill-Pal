import PatientPhoto from "../../../assets/userphoto.png";
import { useState, useEffect } from "react";
import OurLogo from "./Logo";

const UserHeader = () => {
  const [greeting, setGreeting] = useState("");
  const [userName, setUserName] = useState(null);
  const [loginTime, setLoginTime] = useState(null);

  useEffect(() => {
    const storedName = localStorage.getItem("userName");
    const storedLoginTime = localStorage.getItem("loginTime");

    if (storedName) {
      setUserName(storedName);
    }

    if (storedLoginTime) {
      setLoginTime(new Date(storedLoginTime));
    } else {
      const currentTime = new Date();
      setLoginTime(currentTime);
      localStorage.setItem("loginTime", currentTime.toString());
    }

    // Determine the greeting based on the time of day
    const currentHour = new Date().getHours();
    if (currentHour >= 5 && currentHour < 12) {
      setGreeting("Good morning");
    } else if (currentHour >= 12 && currentHour < 18) {
      setGreeting("Good afternoon");
    } else {
      setGreeting("Good evening");
    }
  }, []);

  console.log("Render Name:", userName);

  // Format the date as day month year: 24 Nov 2023
  const formattedDate =
    loginTime &&
    loginTime.toLocaleString("en-GB", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });

  return (
    
    // <div className="flex patient-bg w-full h-[130px] pt-10 px-4">
    //   <div className="flex justify-between ml-8">
    //     <img src={PatientPhoto} alt="Icon" className="w-20 h-20" />
    //     <div className="flex-col pt-3 ml-3">
    //       <span className="">
    //         {greeting}, {userName || "GUEST"}!
    //       </span>
    //       <p className="">{formattedDate}</p>
    //     </div>
    //   </div>
    // </div>
    <div className="flex patient-bg w-full h-[130px] pt-10 px-4 gap-16 lg:gap-0">
    <div className="flex">
      <img src={PatientPhoto} alt="Icon" className="lg:w-20 lg:h-20 w-10 h-10" />
      <div className="lg:flex-col pl-2 lg:pl-4">
        <span className="">
          {greeting}, {userName || "GUEST"}!
        </span>
        <p className="hidden lg:block">{formattedDate}</p>
      </div>
    </div>
    <div className="lg:hidden">
      <OurLogo />
    </div>
    </div>
  );
};

export default UserHeader;



