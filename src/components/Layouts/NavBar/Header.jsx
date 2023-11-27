import { useState, useEffect } from "react";

import ProviderPhoto from "../../../assets/providerphoto.png";
import MainTitle from "../../UI/Titles/MainTitle";

const Header = () => {
  const [userName, setUserName] = useState(null);

  useEffect(() => {
    const storedName = localStorage.getItem("userName");

    if (storedName) {
      setUserName(storedName);
    }
  }, []);

  return (
    <div className="flex pt-16 lg:justify-between gap-4 text-sm lg:text-base flex-wrap">
      <div className="px-2">
        <MainTitle title="Patient Management" />
      </div>
      {/* <h1 className="text-center text-[#000000] text-3xl font-bold"></h1> */}
      <div className="flex">
        <div className="rounded-full mb-6 ">
          <img src={ProviderPhoto} alt="Icon" className="p-3" />
        </div>
        <div className="mx-3">
          <p className="text-base text-[#1E1E1E] font-medium">
            {userName || "GUEST"}!
          </p>
          <p className="text-sm text-[#000000]">Administrator</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
