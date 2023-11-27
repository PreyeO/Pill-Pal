import { useState } from "react";
import Drugs from "../../../assets/drugs.png";
import Time from "../../../assets/timer.png";
import DeleteIcon from "../../../assets/DeleteIcon.svg";

const DrugCard = ({
  DrugName,
  DrugTime,
  Dosage,
  timeStatus,
  reminder,
  start,
  end,
  unit,
  cycle,
  onDelete,
}) => {
  const handleDelete = () => {
    // Trigger the onDelete prop, passing the necessary information
    onDelete();
  };

  const [status, setStatus] = useState("Not Taken");

  const handleClick = () => {
    setStatus((prevStatus) =>
      prevStatus === "Not Taken" ? "Taken" : "Not Taken"
    );
  };

  // Assuming DrugTime is in "HH:mm:ss" format
  const [hours] = DrugTime.split(":");
  const time = parseInt(hours, 10);

  let sideColor = "";

  if (time >= 5 && time < 12) {
    sideColor = "#4EFF8A"; // Morning color
  } else if (time >= 12 && time < 18) {
    sideColor = "#1A1A1A"; // Afternoon color
  } else {
    sideColor = "#FF5B4C"; // Evening color
  }

  return (
    <div
      className={`bg-white flex flex-col px-5 gap-4 py-4 h-auto`}
      style={{ borderLeft: `7px solid ${sideColor}` }}
      onClick={handleClick}
    >
      <div className="flex gap-2">
        <img src={Drugs} alt="drugs" className="w-[20px] h-[20px]" />
        <h3 className="text-[13px]">
          {DrugName}({Dosage}){unit}
        </h3>
      </div>
      <div className="flex lg:gap-3 text-sm gap-1">
        <img src={Time} alt="time" />
        <h3 className="text-[#FF5B4C]">{DrugTime}</h3>
        <h3 className="text-[#FF5B4C]">{cycle}</h3>
      </div>
      <div className="lg:flex lg:justify-between">
        <span
          className={`bg-[#55AAFF] p-1 rounded-md text-center h-[28px] text-sm w-[80px] cursor-pointer hidden lg:block`}
        >
          {status}
        </span>
        <div className="flex">
          <button onClick={handleDelete}>
            {" "}
            <img src={DeleteIcon} alt="drugs" className="w-[30px] h-[30px]" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default DrugCard;
