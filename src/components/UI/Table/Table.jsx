// Table.js

const Table = () => {
  return (
    <div className="mt-2">
      
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th
              scope="col"
              className="px-6 py-3 text-left  font-medium text-gray-500 uppercase tracking-wider"
            >
              #
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Patient Name
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Patient ID
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Condition
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Adherence Status
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Appointment Date
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {/* Add your table rows here */}
          <tr>
            <td className="px-6 py-4 whitespace-nowrap text-sm">1</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm">John Doe</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm">123456</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm">Some Condition</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm">Active</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm">2023-11-23</td>
          </tr>
          {/* Add more rows as needed */}
        </tbody>
      </table>
    </div>
  );
};
{
  /* <div className='rounded-full p-2 bg-red-600 w-3'></div> */
}
export default Table;
