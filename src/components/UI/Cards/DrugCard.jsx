import Drugs from "../../../assets/drugs.png"
import Time from "../../../assets/timer.png"

import Dots from "../../../assets/dots.png"




const DrugCard = ({DrugName, DrugTime, Dosage, Status }) => {
    return (
     
               
        <div className="bg-white w-[250px] flex flex-col px-5 gap-2 py-4 h-auto">
            
      <div className="flex gap-2">
        <img src={Drugs} alt="drugs" />
        <h3>{DrugName}</h3>
        </div>
        <div className="flex gap-3 text-sm">
        <img src={Time} alt="drugs" />  
        <h3 className="text-[#FF5B4C]">{DrugTime}</h3>
        </div>
        <div className="flex justify-around">
        <div className="flex-col text-sm">
        <h3 className="">Dosage</h3>
        <h3>{Dosage}</h3>
        </div>
        <div className="flex gap-3">
        <span className="bg-[#55AAFF] p-1 rounded-md text-center h-[28px] text-sm">{Status}</span>
        <span className="rounded-full bg-[#E8E8E8] h-[30px]"><img src={Dots} alt="drugs" /> </span> 
        </div>
        </div>
          
      </div>
 
     
    );
  };
  
  export default DrugCard ;
  