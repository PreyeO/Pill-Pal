import { Link } from "react-router-dom";
import DashboardIcon from "../../../assets/home.png";
import UsersRecord from "../../../assets/account-file.png";
import Logo from "../../../assets/Logo.svg";
import MenuLine from "../../../assets/Menuline.svg";
import clock from "../../../assets/clock.png";
import Settings from "../../../assets/settings.png";

import { useLocation } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();

  return (
    <div className="bg-white w-[203px] h-auto pt-7 px-3 font-medium hidden lg:block">
      <Link to="/">
        <div className="flex justify-center gap-2 mt-8">
          <img src={Logo} alt="logo" className="w-[48px] h-[48px]" />
          <h2c className="pt-3">
            Pill<span className="text-[#55AAFF]">Pal</span>
          </h2c>
        </div>
      </Link>

      {/* Sidebar header */}
      <div className="p-4">
        <h3 className=" font-semibold text-color px-7 pt-12">MENU</h3>
      </div>

      <div className="flex flex-col justify-center text-center items-center">
        <img src={MenuLine} alt="line" className="w-50" />
      </div>

      {/* Sidebar navigation links */}
      <nav className="py-7">
        <ul className="flex flex-col gap-10" id="color">
          {/* Add more list items as needed */}
          <li>
            <Link
              to="/providerdashboard"
              className={`flex gap-3 px-8 items-center ${
                location.pathname === "/providerdashboard"
                  ? "active-link"
                  : "text-[#686666]"
              }`}
            >
              <img src={DashboardIcon} alt="logo" />
              <h1 className="text-lg">Dashboard</h1>
            </Link>
          </li>
          <li className="flex gap-3 px-8 items-center">
            <img src={UsersRecord} alt="logo" />
            <h1 className="text-lg">Records</h1>
          </li>

          <li className="flex gap-3 px-8 items-center">
            <img src={clock} alt="logo" />
            <h1 className="text-lg">Schedule</h1>
          </li>

          <li className="flex gap-3 px-8 items-center">
            <img src={Settings} alt="logo" />
            <h1 className="text-lg">Settings</h1>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
