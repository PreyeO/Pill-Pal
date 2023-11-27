import React, { useEffect, useState } from "react";

const Table = () => {
  const [schedule, setSchedule] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSchedule = async () => {
      try {
        const token = localStorage.getItem("userToken");

        const response = await fetch(
          "https://pillpal-api.pouletmedia.ng/api/schedule",
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
        }
      } catch (error) {
        console.error("Error fetching schedule:", error);
        setError({ error: 1, message: "Failed to fetch schedule" });
      }
    };

    fetchSchedule();
  }, []);

  return (
    <div className="mt-2">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th
              scope="col"
              className="lg:table-cell px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              #
            </th>
            <th
              scope="col"
              className=" lg:table-cell px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Patient ID
            </th>
            <th
              scope="col"
              className="lg:table-cell px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
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
              className="hidden lg:table-cell px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider "
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
              className="hidden lg:table-cell px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider "
            >
              Unit
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {schedule.map((item, index) => (
            <tr key={item.id}>
              <td className="px-6 py-4 whitespace-nowrap text-sm">
                {index + 1}
              </td>
              <td className=" lg:table-cell px-6 py-4 whitespace-nowrap text-sm">
                0000{item.id}
              </td>
              <td className=" lg:table-cell px-6 py-4 whitespace-nowrap text-sm">
                {item.medication_name}
              </td>
              <td className="hidden lg:table-cell px-6 py-4 whitespace-nowrap text-sm">
                {item.start_date}
              </td>
              <td className=" hidden lg:table-cell px-6 py-4 whitespace-nowrap text-sm">
                {item.end_date}
              </td>
              <td className="hidden lg:table-cell px-6 py-4 whitespace-nowrap text-sm">
                {item.dosage}
              </td>
              <td className=" hidden lg:table-cell px-6 py-4 whitespace-nowrap text-sm ">
                {item.unit}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
