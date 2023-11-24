
import SideBar from '../SideBar/SideBar';
import UserHeader from '../NavBar/UserHeader';
import DrugCard from '../../UI/Cards/DrugCard';
import VitalsCard from '../../UI/Cards/VitalsCard';
import Temperature from "../../../assets/thermometer-lines.png"
import Sleep from "../../../assets/sleep.png"
import Heart from "../../../assets/heart-pulse.png"
import AFP from "../../../assets/liquid-spot.png"
import building from "../../../assets/hospital-building.png"
import pharmacy from "../../../assets/pharmacy.png"
import doctor from "../../../assets/doc.png"
import search from "../../../assets/magnify.png"

import Doctor from "../../../assets/docc.png"
import dots from "../../../assets/dots-vertical.png"





const Patient = () => {


  return (
    <section className="flex-col justify-center items-center min-h-section text-black bg-[#E8E8E8] w-full">
      <div className="flex">
        <SideBar />
        <div className='flex-col mx-auto'>
        <div className=''>
          <UserHeader />
          </div>
          {/* <div className='flex'>
            <div className='flex-col'>
            <h1>Medications</h1>
            <input type="date" className='bg-[#E8E8E8] h-7 text-[#434343]' />
            </div>
            <div className='flex gap-4'>
            <img src={search} alt="hospital building" />
            <button className='w-[50px] h-[50px] bg-[#55AAFF]'>+</button>
            </div>
            </div> */}
         
          <div className='flex justify-evenly max-auto mt-12 '>
        
          <div className='flex flex-wrap gap-3  bg-[#FCFCFC] mx-3 min-w-[55rem]'>

          
            <div className='flex flex-col gap-4'>
            <h1 className='text-center pt-3'>Morning</h1>
              <div className='flex mx-2'>
           
           <div className="h-[136px] bg-[#4EFF8A] w-[7px]"></div>
           <DrugCard DrugName="LiverCureX (20Mg)" DrugTime="8:00 AM" Dosage="4 pill" Status="Taken" />
           </div>
           <div className='flex mx-2'>
          <div className="h-[136px] bg-[#4EFF8A] w-[7px]"></div>
          <DrugCard DrugName="LiverCureX (20Mg)" DrugTime="12:00 AM" Dosage="2 pill" Status="Taken" />
          </div>
          <div className='flex mx-2'>
          <div className="h-[136px] bg-[#4EFF8A] w-[7px]"></div>
          <DrugCard DrugName="LiverCureX (20Mg)" DrugTime="9:00 AM" Dosage="1 pill" Status="Taken" />
          </div>
            </div>

            <div className='flex flex-col gap-4'>
            <h1 className='text-center pt-3'>Afternoon</h1>
              <div className='flex mx-2'>
          <div className="h-[136px] bg-[#1A1A1A] w-[7px]"></div>
          <DrugCard DrugName="LiverCureX (20Mg)" DrugTime="8:00 AM" Dosage="1 pill" Status="Taken" />
          </div>
          <div className='flex mx-2'>
          <div className="h-[136px] bg-[#1A1A1A] w-[7px]"></div>
          <DrugCard DrugName="LiverCureX (20Mg)" DrugTime="8:00 AM" Dosage="7 pill" Status="Taken" />
          </div>
          <div className='flex mx-2'>
          <div className="h-[136px] bg-[#1A1A1A] w-[7px]"></div>
          <DrugCard DrugName="LiverCureX (20Mg)" DrugTime="2:00 AM" Dosage="2 pill" Status="Taken" />
          </div>
            </div>

            <div className='flex flex-col gap-4'>
              <h1 className='text-center pt-3'>Evening</h1>
              <div className='flex mx-2'>
          <div className="h-[136px] bg-[#FF5B4C] w-[7px]"></div>
          <DrugCard DrugName="LiverCureX (20Mg)" DrugTime="11:00 AM" Dosage="3 pill" Status="Taken" />
          </div>
          <div className='flex mx-2'>
          <div className="h-[136px] bg-[#FF5B4C] w-[7px]"></div>
          <DrugCard DrugName="LiverCureX (20Mg)" DrugTime="6:00 AM" Dosage="2 pill" Status="Taken" />
          </div>
            </div>
         
            </div>

            <div className='flex flex-col justify-around mx-auto mt-[-1.5rem]'>
            <div className='flex flex-wrap mx-3  gap-4'>
            <VitalsCard label="Heart Rate" measurement="Bpm" rate="70" src={Heart}/> 
            <VitalsCard label="Temperature" measurement="0c" rate="37" src={Temperature}/> 
            <VitalsCard label="Sleep" measurement="Hr/day" rate="5" src={Sleep}/>
            <VitalsCard label="AFP" measurement="ng/ml" rate="10" src={AFP}/> 
          </div>
        
            <div className='flex flex-col w-[380px] bg-white h-[220px] mx-3 pt-6'>
              <div className='flex justify-between px-4'>
              <h3>Schedule</h3>
              <input type="date" className='bg-[#E8E8E8] h-7 text-[#434343]' />
              </div>
              <div className='flex flex-col text-sm mx-auto gap-3 pt-3'>
                <div className='flex gap-3'>
                  <img src={building} alt="hospital building" />
                  <p>Checkup at Saint. Patricks Hospital</p>
                  <p>12pm</p>
                  <img src={dots} alt="hospital building" />
                </div>
                <div className='flex gap-3'>
                  <img src={pharmacy} alt="hospital building" />
                  <p>Checkup at Saint. Patricks Hospital</p>
                  <p>12pm</p>
                  <img src={dots} alt="hospital building" />
                </div>
                <div className='flex gap-3'>
                  <img src={doctor} alt="hospital building" />
                  <p>Checkup at Saint. Patricks Hospital</p>
                  <p>12pm</p>
                  <img src={dots} alt="hospital building" />
                </div>
                <div className='flex gap-3'>
                  <img src={Doctor} alt="hospital building" />
                  <p>Checkup at Saint. Patricks Hospital</p>
                  <p>12pm</p>
                  <img src={dots} alt="hospital building" />
                </div>
              </div>
         
          </div>
          </div>

          </div>
       
        
          </div>
      

          </div>
          

         
  
          
      
    </section>
  );
};

export default Patient;
