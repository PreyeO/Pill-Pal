import { Link } from "react-router-dom";

import AccountBtn from "../../UI/Buttons/AccountBtn";
import OurLogo from "./Logo";

const NavBar = () => {
  return (
    <nav>
      <div className="flex justify-around h-[120px] text-center items-center">
        <Link to="/">
          <OurLogo />
        </Link>

        <div className="cursor-pointer">
          <Link to="/login">
            <AccountBtn label="Login" />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
