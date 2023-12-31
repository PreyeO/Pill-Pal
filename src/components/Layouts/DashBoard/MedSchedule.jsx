import DrugCard from "../../UI/Cards/DrugCard";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";

const MedSchedule = () => {
  const [schedule, setSchedule] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSchedule = async () => {
      try {
        const token = localStorage.getItem("userToken");

        const response = await fetch(
          "https://pillpal-api.pouletmedia.ng/api/mySchedule",
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (response.ok) {
          const data = await response.json();
          setSchedule(data);
        } else {
          const errorData = await response.json();
          setError(errorData);
          console.log(error);
        }
      } catch (error) {
        setError({ error: 1, message: "Failed to fetch schedule" });
      }
    };

    fetchSchedule();
  }, []);

  const deleteSchedule = async (id) => {
    try {
      const token = localStorage.getItem("userToken");

      const response = await fetch(
        `https://pillpal-api.pouletmedia.ng/api/schedule/${id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.ok) {
        // If deletion is successful, update the schedule state
        setSchedule((prevSchedule) =>
          prevSchedule.filter((schedule) => schedule.id !== id)
        );
        toast.success("Schedule deleted successfully!");
      } else {
        const errorData = await response.json();
        setError(errorData);
        toast.error("Error deleting schedule");
      }
    } catch (error) {
      setError({ error: 1, message: "Failed to delete schedule" });
    }
  };

  const categorizeSchedules = () => {
    const categorized = {
      morning: [],
      afternoon: [],
      evening: [],
    };

    schedule.forEach((schedule) => {
      const userMedicationTime = schedule.medication_time;

      const [hours, minutes] = userMedicationTime.split(":");
      const time = parseInt(hours, 10);

      if (time >= 5 && time < 12) {
        categorized.morning.push(schedule);

        console.log(minutes);
      } else if (time >= 12 && time < 18) {
        categorized.afternoon.push(schedule);
      } else {
        categorized.evening.push(schedule);
      }
    });

    return categorized;
  };

  const categorizedSchedules = categorizeSchedules();

  return (
    <div className="flex flex-wrap justify-between bg-[#FCFCFC] mx-3 w-full">
      <div className="flex flex-col gap-4">
        <h1 className="text-center pt-3">Morning</h1>
        {categorizedSchedules.morning.length > 0 ? (
          <div className="flex mx-2">
            {categorizedSchedules.morning.map((schedule, index) => (
              <DrugCard
                key={index}
                DrugName={schedule.medication_name}
                unit={schedule.unit}
                DrugTime={schedule.medication_time}
                Dosage={schedule.dosage}
                Status="Taken"
                start={schedule.start_date}
                end={schedule.end_date}
                cycle={schedule.medication_cycle}
                onDelete={() => deleteSchedule(schedule.id)} // Pass the onDelete function
              />
            ))}
          </div>
        ) : (
          <p>No schedule.</p>
        )}
      </div>

      <div className="flex flex-col gap-4">
        <h1 className="text-center pt-3">Afternoon</h1>
        {categorizedSchedules.afternoon.length > 0 ? (
          <div className="flex mx-2">
            {categorizedSchedules.afternoon.map((schedule, index) => (
              <DrugCard
                key={index}
                DrugName={schedule.medication_name}
                unit={schedule.unit}
                DrugTime={schedule.medication_time}
                Dosage={schedule.dosage}
                Status="Taken"
                start={schedule.start_date}
                end={schedule.end_date}
                cycle={schedule.medication_cycle}
                onDelete={() => deleteSchedule(schedule.id)} // Pass the onDelete function
              />
            ))}
          </div>
        ) : (
          <p className="text-center mx-3">No schedule.</p>
        )}
      </div>

      <div className="flex flex-col gap-4">
        <h1 className="text-center pt-3">Evening</h1>
        {categorizedSchedules.evening.length > 0 ? (
          <div className="flex mx-2">
            {categorizedSchedules.evening.map((schedule, index) => (
              <DrugCard
                key={index}
                DrugName={schedule.medication_name}
                unit={schedule.unit}
                DrugTime={schedule.medication_time}
                Dosage={schedule.dosage}
                Status="Taken"
                start={schedule.start_date}
                end={schedule.end_date}
                cycle={schedule.medication_cycle}
                onDelete={() => deleteSchedule(schedule.id)} // Pass the onDelete function
              />
            ))}
          </div>
        ) : (
          <p>No schedule.</p>
        )}
      </div>
      <ToastContainer />
    </div>
  );
};

export default MedSchedule;
