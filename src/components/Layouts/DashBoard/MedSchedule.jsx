import DrugCard from "../../UI/Cards/DrugCard";
import { useEffect, useState } from "react";

const MedSchedule = () => {
  const [schedules, setSchedules] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSchedule = async () => {
      try {
        const token = localStorage.getItem('userToken');

        const response = await fetch(
          "https://pillpal-api.pouletmedia.ng/api/mySchedule", {
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        });

        if (response.ok) {
          const data = await response.json();
          setSchedules(data);
        } else {
          const errorData = await response.json();
          setError(errorData);
        }
      } catch (error) {
        console.error("Error fetching schedule:", error);
        setError({ error: 1, message: "Failed to fetch schedule" });
      }
    };

    fetchSchedule();
  }, []);

  // Function to categorize schedules based on the time of the day
  const categorizeSchedules = () => {
    const categorized = {
      morning: [],
      afternoon: [],
      evening: [],
    };

    schedules.forEach((schedule) => {
      const time = new Date(schedule.medication_time).getHours();

      if (time >= 5 && time < 12) {
        categorized.morning.push(schedule);
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
    <div className="flex flex-wrap justify-evenly bg-[#FCFCFC] mx-3 w-full">
      <div className="flex flex-col gap-4">
        <h1 className="text-center pt-3">Morning</h1>
        {categorizedSchedules.morning.length > 0 ? (
          <div className="flex mx-2">
            <div className="h-[136px] bg-[#4EFF8A] w-[7px]"></div>
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
          <div className="flex mx-2">
            <div className="h-auto bg-[#1A1A1A] w-[7px]"></div>
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
          <p>No schedule.</p>
        )}
      </div>

      <div className="flex flex-col gap-4">
        <h1 className="text-center pt-3">Evening</h1>
        {categorizedSchedules.evening.length > 0 ? (
          <div className="flex mx-2">
            <div className="h-[136px] bg-[#FF5B4C] w-[7px]"></div>
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

export default MedSchedule;
