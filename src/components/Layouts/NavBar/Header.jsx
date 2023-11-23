

import ProviderPhoto from '../../../assets/providerphoto.png';
import MainTitle from '../../UI/Titles/MainTitle';



const Header = () => {
  


  return (
    <div className="flex gap-[50rem] pt-16 ">
      <MainTitle title="Patient Management"/>
      {/* <h1 className="text-center text-[#000000] text-3xl font-bold"></h1> */}
      <div className="flex">
        <div className="bg-[#55AAFF] fill-white border-2 border-white drop-shadow-md rounded-full mb-6 ">
          <img src={ProviderPhoto} alt="Icon" className="p-3" />
        </div>
        <div className="mx-3">
          <p className="text-base text-[#1E1E1E] font-medium">Dr Louis</p>
          <p className="text-sm text-[#000000]">Administrator</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
