// import {useEffect, useState} from "react"
import SideBar from "../SideBar/SideBar";
import UserHeader from "../NavBar/UserHeader";

import VitalsCard from "../../UI/Cards/VitalsCard";
import temperature from "../../../assets/temp.png";
import sleep from "../../../assets/sleep.png";
import heart from "../../../assets/heart.png";
import wbc from "../../../assets/wbc.png";
import weight from "../../../assets/weight.png";
import afp from "../../../assets/afp.png";
import building from "../../../assets/hospital-building.png";
import pharmacy from "../../../assets/pharmacy.png";
import doctor from "../../../assets/doc.png";

import Doctor from "../../../assets/docc.png";
import dots from "../../../assets/dots-vertical.png";
import { Link } from "react-router-dom";
import MedSchedule from "./MedSchedule";
import UserSchedules from "./UserSchedules";

const Patient = () => {
  return (
    <section className="flex-col justify-center items-center min-h-section text-black bg-[#E8E8E8]">
      <div className="flex">
        <SideBar />
        <div className="flex-col lg:mx-auto w-full ">
          <div className="">
            <UserHeader />
          </div>

          <div className=" justify-evenly max-auto mt-12 hidden lg:flex mx-2">
            <MedSchedule />

            <div>
              <Link to="/medinfo">
                <button className="bg-[#55AAFF] w-[70px] h-[30px] ml-[-5rem]">
                  +
                </button>
              </Link>
            </div>

            <div className="flex flex-col justify-around mx-auto">
              <div className="flex flex-wrap mx-3 gap-4">
                <VitalsCard
                  label="Heart Rate"
                  measurement="Bpm"
                  rate="70"
                  src={heart}
                />
                <VitalsCard
                  label="Temperature"
                  measurement="0c"
                  rate="37"
                  src={temperature}
                />
                <VitalsCard
                  label="Sleep"
                  measurement="Hr/day"
                  rate="5"
                  src={sleep}
                />
                <VitalsCard
                  label="AFP"
                  measurement="ng/ml"
                  rate="10"
                  src={afp}
                />
              </div>

              <div className="flex flex-col w-[380px] bg-white h-[220px] mx-3 pt-6 mb-6 mt-6">
                <div className="flex justify-between px-4">
                  <h3>Schedule</h3>
                  <input
                    type="date"
                    className="bg-[#E8E8E8] h-7 text-[#434343]"
                  />
                </div>
                <div className="flex flex-col text-sm mx-auto gap-3 pt-3">
                  <div className="flex gap-3">
                    <img src={building} alt="hospital building" />
                    <p>Checkup at Saint. Patricks Hospital</p>
                    <p>12pm</p>
                    <img src={dots} alt="hospital building" />
                  </div>
                  <div className="flex gap-3">
                    <img src={pharmacy} alt="hospital building" />
                    <p>Checkup at Saint. Patricks Hospital</p>
                    <p>12pm</p>
                    <img src={dots} alt="hospital building" />
                  </div>
                  <div className="flex gap-3">
                    <img src={doctor} alt="hospital building" />
                    <p>Checkup at Saint. Patricks Hospital</p>
                    <p>12pm</p>
                    <img src={dots} alt="hospital building" />
                  </div>
                  <div className="flex gap-3">
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

      <div className="bg-[#FCFCFC] lg:hidden block">
        <div className="flex justify-between pt-6 px-4 font-bold">
          <h3 className="text-base">Medication</h3>
          <Link to="/medinfo">
            <button className="text-sm bg-blue-400 p-2 text-white rounded-md">Create Schedule</button>
          </Link>
        </div>
        <div className=" shadow-xl mx-2 mt-3">
          <UserSchedules fullList={true} />
        </div>
        <div className="flex justify-between pt-6 px-4 font-bold">
          <h3 className="">Health Activity</h3>
          <h3 className="text-sm">View detailed report</h3>
        </div>

        <div className="flex justify-evenly  text-sm bg-[#FCFCFC] h-[150px] mt-3 pt-5 shadow-xl mx-2 text-[10px]">
          <div className="flex-col">
            <img src={heart} alt="hospital building" />
            <h6>Heart rate</h6>
            <h6>
              70<span>Bpm</span>
            </h6>
          </div>
          <div className="flex-col">
            <img src={temperature} alt="hospital building" />
            <h6>Temp</h6>
            <h6>
              37<span>0c</span>
            </h6>
          </div>
          <div className="flex-col">
            <img src={weight} alt="hospital building" />
            <h6>Weight</h6>
            <h6>
              120<span>kg</span>
            </h6>
          </div>
          <div className="flex-col">
            <img src={wbc} alt="hospital building" />
            <h6>WBC</h6>
            <h6>
              3000<span>c/ml</span>
            </h6>
          </div>
          <div className="flex-col">
            <img src={afp} alt="hospital building" />
            <h6>AFP</h6>
            <h6>
              10<span>ng/ml</span>
            </h6>
          </div>
          <div className="flex-col">
            <img src={sleep} alt="hospital building" />
            <h6>Sleep</h6>
            <h6>
              5<span>hr/day</span>
            </h6>
          </div>
        </div>

        <div className="pt-6 px-4 font-bold">
          <h3>Schedule</h3>
        </div>
        <div className="flex flex-col w-full bg-white h-[220px] px-4 pt-6 shadow-xl">
          <div className="">
            <input
              type="date"
              className="bg-black h-7 rounded-full text-center text-white"
            />
          </div>
          <div className="flex flex-col text-sm mx-auto gap-3 pt-3">
            <div className="flex gap-3">
              <img src={building} alt="hospital building" />
              <p>Checkup at Saint. Patricks Hospital</p>
              <p>12pm</p>
            </div>
            <div className="flex gap-3">
              <img src={pharmacy} alt="hospital building" />
              <p>Checkup at Saint. Patricks Hospital</p>
              <p>12pm</p>
            </div>
            <div className="flex gap-3">
              <img src={doctor} alt="hospital building" />
              <p>Checkup with DR. Tunde Awolowo</p>
              <p>12pm</p>
            </div>
            <div className="flex gap-3">
              <img src={Doctor} alt="hospital building" />
              <p>Checkup with DR. Mathew Okoronkwo</p>
              <p>12pm</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Patient;
