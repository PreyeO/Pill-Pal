import Drugs from "../../../assets/drugs.png"
import Time from "../../../assets/timer.png"

import Dots from "../../../assets/dots.png"




const DrugCard = ({DrugName, DrugTime, Dosage, Status, timeStatus, reminder, start, end, unit, cycle }) => {
    return (
     
               
      <div className="bg-white  flex flex-col px-5 gap-2 py-4 h-auto">
            
      <div className="flex gap-2">
        <img src={Drugs} alt="drugs" className="w-[20px] h-[20px]"/>
        <h3  className="text-[13px]">{DrugName}({Dosage}){unit}</h3>
        </div>
        <div className="flex lg:gap-3 text-sm gap-1">
        <img src={Time} alt="time" />  
        <h3 className="text-[#FF5B4C]">{DrugTime}</h3>
        <h3 className="text-[#FF5B4C]">{cycle}</h3>
        {/* <span className=" lg:hidden text-[#FF5B4C]">{timeStatus}</span> */}
        </div>
        <div  className="flex  gap-4">
        <h6  className="text-[13px]">from: {start}</h6>
        <h6  className="text-[13px]">to: {end}</h6>
        </div>
        {/* <span className=" lg:hidden bg-[#D5FFE3] rounded w-[120px]">{reminder}</span> */}
       
        <div className="lg:flex hidden ">
        <span className="bg-[#55AAFF] p-1 rounded-md text-center h-[28px] text-sm w-[80px]">{Status}</span>
        <span className="rounded-full bg-[#E8E8E8] h-[30px] mx-auto"><img src={Dots} alt="drugs" className="w-[30px] h-[30px]"/> </span> 
        </div>
      
        </div>
      
          
   
 
     
    );
  };
  
  export default DrugCard ;
  