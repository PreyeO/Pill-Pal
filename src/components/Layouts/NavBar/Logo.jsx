
import { Link } from 'react-router-dom';
import Logo from '../../../assets/Logo.svg';



const OurLogo = () => {
  

  return (
  
     <div>

       
        <Link to="/"><div className="flex gap-2 cursor-pointer">
            <img src={Logo} alt="logo" className="w-[48px] h-[48px]" />
            <h3 className="text-black font-bold pt-3">
              Pill<span className="text-[#55AAFF]">Pal</span>
            </h3>
            </div>
            </Link>
            </div>

    
  
  );
};

export default OurLogo;
