import SideBar from "../SideBar/SideBar";
import UserHeader from "../NavBar/UserHeader";
import EmptyFile from "../../../assets/emptyfile.png";
import weight from "../../../assets/weight.png";
import { Link } from "react-router-dom";

const EmptyPatientDashboard = () => {
  return (
    <section className="flex-col justify-center items-center min-h-section text-black bg-[#E8E8E8] w-full">
      <div className="flex">
        <SideBar />
        <div className="flex-col lg:mx-auto w-full">
          <div className="">
            <UserHeader />
          </div>

          <div className=" justify-evenly max-auto mt-12 lg:flex hidden">
            <div className="flex-col">
              <div className="flex justify-around bg-[#FCFCFC] mx-3 min-w-[55rem]">
                <h1 className="text-center pt-3">Morning</h1>
                <h1 className="text-center pt-3">Afternoon</h1>
                <h1 className="text-center pt-3">Evening</h1>
              </div>
              <div className="w-[350px] mx-auto mt-4">
                <img src={EmptyFile} alt="hospital building" />
                <h1 className="text-center mt-4">
                  You don’t have any medications.
                </h1>
                <Link to="/medinfo">
                  <button
                    type="submit"
                    className="bg-[#55AAFF] h-[55px] w-full rounded-md mt-4"
                  >
                    Add Medication{" "}
                  </button>
                </Link>
              </div>
            </div>

            <div className="flex flex-col justify-around mx-auto  gap-6">
              <div className="w-[380px] h-[220px] border-dashed bg-white">
                <div className="w-[200px] h-[150px] border border-dashed bg-white mx-auto mt-9">
                  <p className="text-sm text-center pt-16 text-[#55AAFF]">
                    Connect your smart watch
                  </p>
                </div>
              </div>

              <div className="flex flex-col w-[380px] bg-white h-[220px] mx-3 pt-6">
                <div className="flex justify-between px-4">
                  <h3>Schedule</h3>
                  <input
                    type="date"
                    className="bg-[#E8E8E8] h-7 text-[#434343]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="lg:hidden block">
        <div className="pt-6 px-4 font-bold">
          <h3>Medication</h3>
        </div>
        <div className="flex">
          <div className="shadow-xl mx-2 w-[221px] h-[100px] bg-white flex px-4 pt-2">
            <div className="flex-col">
              <img src={weight} alt="hospital building" />
              <p>You haven’t added any medications</p>
            </div>
          </div>
          <div className="h-[100px] w-[150px] bg-white flex flex-col justify-center items-center mx-2">
            <h6 className="text-sm">Add medication</h6>
            <div>
              <Link to="/medinfo">
                <button className="bg-[#55AAFF] w-[70px] h-[30px]">+</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between text-sm pt-6 px-4 font-bold">
        <h3>Health Activity</h3>
      </div>

      <div className="flex justify-evenly  text-sm bg-[#FDFDFD] h-[150px] mt-3 pt-5 shadow-xl mx-2">
        <p>Get access to your EHR (Electronic Health Records)</p>
      </div>

      <div className="pt-6 px-4 font-bold">
        <h3>Schedule</h3>
      </div>
      <div className="flex flex-col w-full bg-white h-[120px] px-4 pt-6 shadow-xl ">
        <input
          type="date"
          className="bg-black h-7 text-white rounded-full text-center w-[150px]"
        />
        <p className="text-center pt-7">There’s nothing on your schedule</p>
      </div>
    </section>
  );
};

export default EmptyPatientDashboard;
