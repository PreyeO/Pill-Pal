import Drugs from "../../../assets/drugs.png"
import Time from "../../../assets/timer.png"

import Dots from "../../../assets/dots.png"




const DrugCard = ({DrugName, DrugTime, Dosage, Status, timeStatus, reminder }) => {
    return (
     
               
      <div className="bg-white  flex flex-col px-5 gap-2 py-4 h-auto">
            
      <div className="flex gap-2">
        <img src={Drugs} alt="drugs" className="w-[30px] h-[30px]"/>
        <h3>{DrugName}</h3>
        </div>
        <div className="flex lg:gap-3 text-sm gap-1">
        <img src={Time} alt="drugs" />  
        <h3 className="text-[#FF5B4C]">{DrugTime}</h3>
        <span className=" lg:hidden text-[#FF5B4C]">{timeStatus}</span>
        </div>
        <span className=" lg:hidden bg-[#D5FFE3] rounded w-[120px]">{reminder}</span>
        <div className=" justify-around hidden lg:flex">
        <div className="flex-col text-sm">
        <h3 className="">Dosage</h3>
        <h3>{Dosage}</h3>
        </div>
        <div className="lg:flex lg:gap-3 flex-col hidden ">
        <span className="bg-[#55AAFF] p-1 rounded-md text-center h-[28px] text-sm">{Status}</span>
        <span className="rounded-full bg-[#E8E8E8] h-[30px] mx-auto"><img src={Dots} alt="drugs" className="w-[30px] h-[30px]"/> </span> 
        </div>
        </div>
          
      </div>
 
     
    );
  };
  
  export default DrugCard ;
  