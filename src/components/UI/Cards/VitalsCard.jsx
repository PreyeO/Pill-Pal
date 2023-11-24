import Drugs from "../../../assets/drugs.png"
import Time from "../../../assets/timer.png"

import Dots from "../../../assets/dots.png"




const VitalsCard = ({label, measurement, rate, src }) => {
    return (
     
               
    <div className="bg-white h-[100px] w-[180px] flex flex-col px-5 gap-2  justify-center items-center p-7">
            
      <div className="flex">
    
        <img src={src} alt="drugs" />
   
        <div className="flex-col">
        <h3>{label}</h3>
        <div className="flex gap-2">
        <h3>{rate}</h3>
        <span>{measurement}</span>
        </div>
        </div>
        </div>
      
      
        </div>
       
     
 
     
    );
  };
  
  export default VitalsCard ;
  