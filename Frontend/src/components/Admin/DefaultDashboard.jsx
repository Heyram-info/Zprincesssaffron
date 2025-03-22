import React, { useEffect, useState } from "react";
import axios from "axios";
import { Line, Bar, Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

const DefaultDashboard = ({ isDarkMode }) => {
  const [lineChartData, setLineChartData] = useState({ labels: [], datasets: [] });
  const [barChartData, setBarChartData] = useState({ labels: [], datasets: [] });
  const [pieChartData, setPieChartData] = useState({ labels: [], datasets: [] });
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [loading, setLoading] = useState(true);

  const fetchData = async (year) => {
    setLoading(true);
    try {
      const response = await axios.get(`/admin/default-analytics?year=${year}`);
      const { salesData, revenueData, productSales } = response.data || {};

      setLineChartData({
        labels: Object.keys(salesData || {}),
        datasets: [
          {
            label: `Sales - ${year}`,
            data: Object.values(salesData || {}),
            borderColor: isDarkMode ? "#9d4edd" : "#8884d8",
            backgroundColor: isDarkMode ? "rgba(157, 77, 237, 0.2)" : "rgba(136, 132, 216, 0.2)",
          },
        ],
      });

      setBarChartData({
        labels: Object.keys(revenueData || {}),
        datasets: [
          {
            label: `Revenue - ${year}`,
            data: Object.values(revenueData || {}),
            backgroundColor: "rgba(75, 192, 192, 0.6)",
            borderColor: "#4bc0c0",
            borderWidth: 1,
          },
        ],
      });

      const products = (Array.isArray(productSales) ? productSales : [])
        .filter((product) => product.name && product.quantity)
        .map((product) => ({ name: product.name, quantity: product.quantity }));

      setPieChartData({
        labels: products.map((product) => product.name),
        datasets: [
          {
            label: "Top Selling Products",
            data: products.map((product) => product.quantity),
            backgroundColor: isDarkMode
              ? ["#ff6b6b", "#4ecdc4", "#f9ca24", "#d1d8e0"]
              : ["#ff6384", "#36a2eb", "#cc65fe", "#ffce56"],
            borderColor: isDarkMode ? "#343a40" : "#fff",
            borderWidth: 1,
          },
        ],
      });
      setLoading(false);
    } catch (error) {
      console.error("Error fetching analytics data:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData(currentYear);
  }, [isDarkMode, currentYear]);

  return (
    <div className={`p-6 ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
      <h2 className="text-2xl font-bold mb-4">Analytics Overview</h2>
      <div className="flex justify-center items-center gap-4 mb-6">
        <button onClick={() => setCurrentYear((prev) => prev - 1)} className="px-4 py-2 bg-blue-500 text-white rounded">Previous Year</button>
        <span className="text-lg font-semibold">{currentYear}</span>
        <button onClick={() => setCurrentYear((prev) => prev + 1)} className="px-4 py-2 bg-blue-500 text-white rounded">Next Year</button>
      </div>
      {loading ? (
        <div className="text-center text-lg font-semibold">Loading data...</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className={`p-4 rounded-lg shadow-md ${isDarkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
            <h3 className="text-lg font-semibold mb-3">Sales Data</h3>
            <Line data={lineChartData} options={{ responsive: true }} />
          </div>
          <div className={`p-4 rounded-lg shadow-md ${isDarkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
            <h3 className="text-lg font-semibold mb-3">Revenue Data</h3>
            <Bar data={barChartData} options={{ responsive: true }} />
          </div>
          <div className={`p-4 rounded-lg shadow-md ${isDarkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
            <h3 className="text-lg font-semibold mb-3">Top Selling Products</h3>
            <Pie data={pieChartData} options={{ responsive: true }} />
          </div>
        </div>
      )}
    </div>
  );
};

export default DefaultDashboard;
