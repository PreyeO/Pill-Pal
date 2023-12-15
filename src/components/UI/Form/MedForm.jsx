import TextInput from "../Inputs/TextInput";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import SelectInput from "../Inputs/selectInput";
// import Switch from 'react-switch';

const MedForm = () => {
  const unitOptions1 = [
    "(Tablet)",
    "(Capsule)",
    "(ml)",
    "(tsp)",
    "(tbsp)",
    "(mg)",
    "(g)",
    "(oral)",
  ];
  const unitOptions2 = [
    "(Daily)",
    "(BID)",
    "(TID)",
    "(QID)",
    "(PRN)",
    "(Once a Week)",
  ];

  const [medication_name, setMedication_name] = useState("");
  const [dosage, setDosage] = useState("");
  const [unit, setUnit] = useState("");
  const [medication_cycle, setMedication_cycle] = useState("");
  const [start_date, setStart_date] = useState("");
  const [end_date, setEnd_date] = useState("");
  const [description, setDescription] = useState("");
  const [medication_time, setMedication_time] = useState("");
  const [notification_preferences, setNotification_preferences] = useState("");

  console.log(localStorage.getItem("userToken"));
  const navigate = useNavigate();

  const handleSubmitBtn = async (e) => {
    e.preventDefault();

    let medSchedule = {
      medication_name,
      dosage,
      unit,
      medication_cycle,
      start_date,
      end_date,
      description,
      medication_time,
      notification_preferences,
    };
    console.log("medSchedule:", medSchedule);

    try {
      const response = await fetch(
        "https://pillpal-api.pouletmedia.ng/api/schedule",
        {
          method: "POST",
          headers: {
            "content-type": "application/json",

            Authorization: `Bearer ${localStorage.getItem("userToken")}`,
          },

          body: JSON.stringify(medSchedule),
        }
      );

      if (response.ok) {
        toast.success("Schedule added Successfully");

        setTimeout(() => {
          navigate("/userdashboard");
        }, 600);
      } else {
        const errorData = await response.json();
        toast.error(`Failed: ${errorData.message}`);
      }
    } catch (err) {
      console.error(err);
      toast.error(`Failed: ${err.message}`);
    }
  };

  return (
    <form
      className="flex flex-col mx-auto mt-4 gap-6 w-[50%]"
      onSubmit={handleSubmitBtn}
    >
      <TextInput
        placeholder="Enter medication name"
        type="text"
        label="Med name"
        required
        value={medication_name}
        onChange={(e) => setMedication_name(e.target.value)}
        className="w-full"
      />

      <div className="flex justify-evenly text-center">
        <TextInput
          placeholder="Dosage"
          type="number"
          label="Enter dosage"
          required
          value={dosage}
          onChange={(e) => setDosage(e.target.value)}
          className=" w-[370px]"
        />
        <SelectInput
          placeholder="Enter Unit/dosage"
          type="text"
          label="Unit"
          required
          value={unit}
          onChange={(e) => setUnit(e.target.value)}
          unitOptions={unitOptions1}
          className="w-[370px]"
        />
      </div>
      <div className=" flex justify-between text-center">
        <TextInput
          placeholder="Enter dosage time"
          type="time"
          label="Dosage time"
          required
          value={medication_time}
          onChange={(e) => setMedication_time(e.target.value)}
          className="w-[370px]"
        />

        <SelectInput
          placeholder="Enter medication cycle"
          type="text"
          label="Med cycle"
          required
          value={medication_cycle}
          onChange={(e) => setMedication_cycle(e.target.value)}
          unitOptions={unitOptions2}
          className="w-[370px]"
        />
      </div>
      <div className="flex justify-between text-center">
        <TextInput
          placeholder="Enter start date"
          type="date"
          label="Start date"
          required
          value={start_date}
          onChange={(e) => setStart_date(e.target.value)}
          className="w-[370px]"
        />
        <TextInput
          placeholder="Enter end date"
          type="date"
          label="End date"
          required
          value={end_date}
          onChange={(e) => setEnd_date(e.target.value)}
          className="w-[370px]"
        />
      </div>

      <div className=" flex justify-between text- gap-5">
        <TextInput
          placeholder="Enter name of disease"
          type="text"
          label="Description"
          required
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-[370px]"
        />

        <div className="flex items-center">
          <input
            type="checkbox"
            id="toggle"
            className="form-checkbox h-5 w-5 text-[#55AAFF]"
            checked={notification_preferences}
            onChange={(e) => setNotification_preferences(e.target.checked)}
          />
          <label htmlFor="toggle" className="ml-2 text-gray-700">
            Enable/Disable
          </label>
        </div>
      </div>

      <div className="mt-4">
        <button
          type="submit"
          className="bg-[#55AAFF] h-[55px] w-full rounded-md"
        >
          Add medication schedule
        </button>
      </div>
      {/* </div> */}
      <ToastContainer />
    </form>
  );
};

export default MedForm;
