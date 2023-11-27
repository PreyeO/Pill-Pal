import DrugCard from "../../UI/Cards/DrugCard";
import { useEffect, useState } from "react";

const UserSchedules = () => {
  const [schedule, setSchedule] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSchedule = async () => {
      try {
        const token = localStorage.getItem("userToken");
        console.log("Token:", token);

        const response = await fetch(
          "https://pillpal-api.pouletmedia.ng/api/mySchedule",
          {
            method: "GET",
            headers: {
              // 'content-type': 'application/json',
              Authorization: `Bearer ${token}`,
              // 'Authorization': `Bearer ${localStorage.getItem('userToken')}`,
            },
          }
        );

        if (response.ok) {
          const data = await response.json();
          console.log("Data:", data);
          setSchedule(data);
        } else {
          const errorData = await response.json();
          console.error("Error Data:", errorData);
          setError(errorData);
          console.log(error);
        }
      } catch (error) {
        console.error("Error fetching schedule:", error);
        setError({ error: 1, message: "Failed to fetch schedule" });
      }
    };

    fetchSchedule();
  }, []);

  const categorizeSchedules = () => {
    const categorized = {
      morning: [],
      afternoon: [],
      evening: [],
    };

    schedule.forEach((schedule) => {
      const userMedicationTime = schedule.medication_time;

      // Assuming userMedicationTime is in "HH:mm:ss" format
      const [hours, minutes] = userMedicationTime.split(":");
      const time = parseInt(hours, 10);

      if (time >= 5 && time < 12) {
        categorized.morning.push(schedule);
      } else if (time >= 12 && time < 18) {
        categorized.afternoon.push(schedule);
      } else {
        categorized.evening.push(schedule);
        console.log(minutes);
      }
    });

    return categorized;
  };

  // Call categorizeSchedules whenever the schedule state changes
  const categorizedSchedules = categorizeSchedules();

  return (
    <div className=" bg-[#FCFCFC] mx-3 w-full flex-col">
      <div className="flex flex-col gap-4">
        <h1 className="text-center pt-3">Morning</h1>

        {categorizedSchedules.morning.length > 0 ? (
          <div className="flex-col mx-2 ">
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
          <div className="flex-col mx-2">
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
          <div className="flex-col mx-2">
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
              />
            ))}
          </div>
        ) : (
          <p>No schedule.</p>
        )}
      </div>
    </div>
  );
};

export default UserSchedules;
