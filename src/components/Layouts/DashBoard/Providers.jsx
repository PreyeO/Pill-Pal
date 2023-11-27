import Calendar from "react-calendar";
import SideBar2 from "../SideBar/SideBar2";
import Header from "../NavBar/Header";
import Table from "../../UI/Table/Table";
import SearchBar from "../../UI/Inputs/SearchBar";

import { useState } from "react";

const Provider = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <section className="flex-col justify-center items-center min-h-section text-black bg-[#E8E8E8] ">
      <div className="flex">
        <SideBar2 />
        <div className="text-2xl flex-col mx-auto">
          <div className=" ">
            <Header />
          </div>
          <div className=" lg:block hidden">
            <SearchBar />
          </div>
          <p className="text-[#1E1E1E] text-base mt-8 font-semibold pl-4">
            Patient List
          </p>
          <div className=" lg:justify-evenly max-auto lg:flex mx-2 gap-7">
            <Table />

            <div className=" text-base lg:block hidden">
              <Calendar
                onChange={handleDateChange}
                value={selectedDate}
                className="rounded-md border-none"
              />
              <div className="w-full h-[150px] bg-white  text-sm mt-8 flex flex-col  ">
                <div className="flex pt-8 justify-around ">
                  <p className="text-[#1E1E1E] font-semibold">Appointments:</p>
                  <div className="border rounded-md p-2">
                    {selectedDate.toDateString()}
                  </div>
                </div>
                <p className="w-[130px] text-center mx-auto">
                  You dont have any appointment today{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="space-x-1 my-14">
            <button className="bg-[#1D9D21] rounded-md text-white text-sm font-medium w-8 h-8 active:bg-[#1D9D21]">
              1
            </button>
            <button className="bg-[#D9D9D9] rounded-md text-[#303137] text-sm font-medium w-8 h-8">
              2
            </button>
            <button className="bg-[#D9D9D9] rounded-md text-[#303137] text-sm font-medium w-8 h-8">
              3
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Provider;
