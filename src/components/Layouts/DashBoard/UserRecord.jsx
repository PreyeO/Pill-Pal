import { useEffect, useState } from "react";
import OurLogo from "../NavBar/Logo";
import { Link } from "react-router-dom";

const UserRecord = () => {
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

  return (
    <div className="mt-5">
      <div className="flex justify-between px-10">
        <Link to="/">
          <OurLogo />
        </Link>
        <Link to="/userdashboard">
          <button className="rounded-md  text-sm border w-[100px] h-[54px] bg-black text-white">
            Back
          </button>
        </Link>
      </div>

      <div className="mt-2 overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th
                scope="col"
                className="px-6 py-3 text-left font-medium text-gray-500 uppercase tracking-wider"
              >
                #
              </th>
              <th
                scope="col"
                className="hidden lg:table-cell px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Medication Name
              </th>
              <th
                scope="col"
                className="hidden lg:table-cell px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Start Date
              </th>
              <th
                scope="col"
                className="hidden lg:table-cell px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                End Date
              </th>
              <th
                scope="col"
                className="hidden lg:table-cell px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Dosage
              </th>
              <th
                scope="col"
                className="hidden lg:table-cell px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Unit
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {schedule.map((schedule, index) => (
              <tr key={index}>
                <td className="px-6 py-4 whitespace-nowrap text-sm">
                  {index + 1}
                </td>
                <td className=" lg:table-cell px-6 py-4 whitespace-nowrap text-sm">
                  {schedule.medication_name}
                </td>
                <td className="hidden lg:table-cell px-6 py-4 whitespace-nowrap text-sm">
                  {schedule.start_date}
                </td>
                <td className="hidden lg:table-cell px-6 py-4 whitespace-nowrap text-sm">
                  {schedule.end_date}
                </td>
                <td className=" lg:table-cell px-6 py-4 whitespace-nowrap text-sm">
                  {schedule.dosage}
                </td>
                <td className=" lg:table-cell px-6 py-4 whitespace-nowrap text-sm">
                  {schedule.unit}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserRecord;
