import axios from "axios";
import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import "chart.js/auto";
import SalesComparison from "./SalesComparison";

const SalesOverTime = ({ filters }) => {
  const [salesData, setSalesData] = useState({ labels: [], salesValues: [], revenueValues: [] });
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    const fetchSalesData = async () => {
      try {
        const params = filters?.startDate && filters?.endDate ? { startDate: filters.startDate, endDate: filters.endDate } : {};
        const response = await axios.get("/admin/users/sales-and-revenue", { params });

        setSalesData(response.data);
      } catch (error) {
        console.error("Error fetching sales data:", error);
      }
    };

    fetchSalesData();
  }, [filters]); // Include filters in dependencies to fetch data when they change

  const filteredLabels = salesData.labels.filter(label => label.includes(currentYear));
  const filteredSalesValues = salesData.salesValues.slice(0, filteredLabels.length);
  const filteredRevenueValues = salesData.revenueValues.slice(0, filteredLabels.length);

  const data = {
    labels: filteredLabels,
    datasets: [
      {
        label: "Total Sales",
        data: filteredSalesValues,
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 1,
        yAxisID: "y-axis-sales",
      },
      {
        label: "Total Revenue",
        data: filteredRevenueValues,
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
        yAxisID: "y-axis-revenue",
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
    responsive: true,
    scales: {
      y: {
        type: "linear",
        position: "left",
        beginAtZero: true,
        title: {
          display: true,
          text: "Sales (Units)",
        },
      },
      y1: {
        type: "linear",
        position: "right",
        beginAtZero: true,
        title: {
          display: true,
          text: "Revenue ($)",
        },
        grid: {
          drawOnChartArea: false,
        },
      },
    },
  };

  const handlePrevYear = () => setCurrentYear(prevYear => prevYear - 1);
  const handleNextYear = () => setCurrentYear(prevYear => prevYear + 1);

  return (
    <div className="p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Sales Over Time</h2>

      {/* Year Navigation */}
      <div className="flex items-center justify-between mb-4">
        <button onClick={handlePrevYear} className="px-3 py-1 bg-gray-200 rounded-md hover:bg-gray-300">← Previous</button>
        <span className="text-lg font-medium">{currentYear}</span>
        <button onClick={handleNextYear} className="px-3 py-1 bg-gray-200 rounded-md hover:bg-gray-300">Next →</button>
      </div>

      {/* Line Chart */}
      <div className="w-full h-96">
        <Line data={data} options={options} />
      </div>

      {/* Sales Comparison Component */}
      {/* <SalesComparison labels={salesData.labels} revenueValues={salesData.revenueValues} salesValues={salesData.salesValues} /> */}
    </div>
  );
};

export default SalesOverTime;
