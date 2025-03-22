import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { format } from 'date-fns';
import { useAnalyticsContext } from './context/AnalyticsContext';

const AnalyticsFilters = ({ onApplyFilters }) => {
  const { fetchRevenueData, filterByDateRange } = useAnalyticsContext();
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [selectedMonth, setSelectedMonth] = useState("");

  const handleApplyFilters = () => {
    const formattedStartDate = format(startDate, 'yyyy-MM-dd');
    const formattedEndDate = format(endDate, 'yyyy-MM-dd');
    onApplyFilters({ startDate: formattedStartDate, endDate: formattedEndDate });
    fetchRevenueData(formattedStartDate, formattedEndDate);
    filterByDateRange(formattedStartDate, formattedEndDate);
  };

  const handleResetFilters = () => {
    const defaultStartDate = new Date();
    const defaultEndDate = new Date();
    setStartDate(defaultStartDate);
    setEndDate(defaultEndDate);
    window.location.reload();
  };

  const handleQuater = () => {
    const year = new Date().getFullYear();
    setStartDate(new Date(year, 0, 1));
    setEndDate(new Date(year, 2, 31));
  };

  const handleHalf = () => {
    const year = new Date().getFullYear();
    setStartDate(new Date(year, 0, 1));
    setEndDate(new Date(year, 5, 30));
  };

  const handleThisYear = () => {
    const year = new Date().getFullYear();
    setStartDate(new Date(year, 0, 1));
    setEndDate(new Date(year, 11, 31));
  };

  const handleMonthChange = (event) => {
    const month = parseInt(event.target.value);
    const year = new Date().getFullYear();
    setStartDate(new Date(year, month, 1));
    setEndDate(new Date(year, month + 1, 0));
  };

  return (
    <div className="p-6 bg-white shadow-md rounded-lg mb-6">
      <h2 className="text-xl font-bold mb-4">Filters</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div>
          <label className="block font-medium mb-1">Start Date:</label>
          <DatePicker selected={startDate} onChange={setStartDate} className="w-full p-2 border rounded-md" />
        </div>
        <div>
          <label className="block font-medium mb-1">End Date:</label>
          <DatePicker selected={endDate} onChange={setEndDate} className="w-full p-2 border rounded-md" />
        </div>
        <div className="flex flex-wrap gap-2">
          <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600" onClick={handleQuater}>Quarter</button>
          <button className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600" onClick={handleHalf}>Half-Yearly</button>
          <button className="px-4 py-2 bg-purple-500 text-white rounded-md hover:bg-purple-600" onClick={handleThisYear}>This Year</button>
        </div>
        <div>
          <label className="block font-medium mb-1">Select a Month:</label>
          <select id="monthSelect" value={selectedMonth} onChange={handleMonthChange} className="w-full p-2 border rounded-md">
            <option value="" disabled>Select Month</option>
            {[
              "January", "February", "March", "April", "May", "June",
              "July", "August", "September", "October", "November", "December"
            ].map((month, index) => (
              <option key={index} value={index}>{month}</option>
            ))}
          </select>
        </div>
      </div>
      <div className="mt-6 flex space-x-4">
        <button onClick={handleApplyFilters} className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
          Apply Filters
        </button>
        <button onClick={handleResetFilters} className="px-4 py-2 bg-gray-300 text-black rounded-md hover:bg-gray-400">
          Reset Filters
        </button>
      </div>
    </div>
  );
};

export default AnalyticsFilters;
