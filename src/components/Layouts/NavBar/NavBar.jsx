
import { Link } from 'react-router-dom';
import Logo from '../../../assets/Logo.svg';
import AccountBtn from '../../UI/Buttons/AccountBtn';


const NavBar = () => {
  

  return (
    <nav>
     

        <div className="flex justify-around h-[120px] text-center items-center">
          <div className="flex gap-2 cursor-pointer">
            <img src={Logo} alt="logo" className="w-[48px] h-[48px]" />
            <h3 className="text-black font-bold pt-3">
              Pill<span className="text-[#55AAFF]">Pal</span>
            </h3>
          </div>

          <div className="cursor-pointer">
            <Link to="/login"><AccountBtn label="Login" /></Link>
          </div>
        </div>
    
    </nav>
  );
};

export default NavBar;
