import React, { useState } from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, LineElement, PointElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, BarElement, LineElement, PointElement, Title, Tooltip, Legend);

const SalesComparison = ({ labels, revenueValues, salesValues }) => {
  const [selectedYear, setSelectedYear] = useState('2024');
  const [comparisonType, setComparisonType] = useState('');
  const [compareYear1, setCompareYear1] = useState('');
  const [compareYear2, setCompareYear2] = useState('');

  const data = labels.map((label, index) => {
    const [month, year] = label.split(' ');
    return { month, year, revenue: revenueValues[index], sales: salesValues[index] };
  });

  const filteredData = data.filter(
    (item) =>
      (!compareYear1 && !compareYear2 && item.year === selectedYear) ||
      (compareYear1 && compareYear2 && (item.year === compareYear1 || item.year === compareYear2))
  );

  const groupData = (interval) => {
    switch (interval) {
      case 'monthly':
        return filteredData.map((item) => ({
          label: `${item.month} ${item.year}`,
          revenue: item.revenue,
          sales: item.sales,
        }));

      case 'quarterly':
      case 'half-yearly':
      case 'yearly':
        const grouped = filteredData.reduce((acc, curr) => {
          const key =
            interval === 'quarterly'
              ? `Q${Math.ceil(new Date(curr.month + ' 1').getMonth() / 3)} ${curr.year}`
              : interval === 'half-yearly'
              ? new Date(curr.month + ' 1').getMonth() < 6
                ? `H1 ${curr.year}`
                : `H2 ${curr.year}`
              : curr.year;

          if (!acc[key]) acc[key] = { revenue: 0, sales: 0 };
          acc[key].revenue += curr.revenue;
          acc[key].sales += curr.sales;
          return acc;
        }, {});

        return Object.entries(grouped).map(([key, value]) => ({
          label: key,
          ...value,
        }));

      default:
        return [];
    }
  };

  const generateChartData = (interval) => {
    const groupedData = groupData(interval);
    const labels = groupedData.map((item) => item.label);
    const revenueData = groupedData.map((item) => item.revenue);
    const salesData = groupedData.map((item) => item.sales);

    return {
      labels,
      datasets: [
        {
          label: 'Revenue (Bar)',
          type: 'bar',
          data: revenueData,
          backgroundColor: 'rgba(75, 192, 192, 0.5)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1,
        },
        {
          label: 'Sales (Bar)',
          type: 'bar',
          data: salesData,
          backgroundColor: 'rgba(153, 102, 255, 0.5)',
          borderColor: 'rgba(153, 102, 255, 1)',
          borderWidth: 1,
        },
        {
          label: 'Revenue Trend (Line)',
          type: 'line',
          data: revenueData,
          borderColor: 'rgba(255, 99, 132, 1)',
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          fill: false,
          borderWidth: 2,
          tension: 0.3,
        },
        {
          label: 'Sales Trend (Line)',
          type: 'line',
          data: salesData,
          borderColor: 'rgba(54, 162, 235, 1)',
          backgroundColor: 'rgba(54, 162, 235, 0.2)',
          fill: false,
          borderWidth: 2,
          tension: 0.3,
        },
      ],
    };
  };

  const years = [...new Set(labels.map((label) => label.split(' ')[1]))];

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-semibold text-gray-700">Sales and Revenue Comparison</h2>

      <div className="mt-4 space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Select Year:</label>
          <select className="w-full p-2 border rounded-md" value={selectedYear} onChange={(e) => setSelectedYear(e.target.value)} disabled={compareYear1 && compareYear2}>
            {years.map((year) => (
              <option key={year} value={year}>{year}</option>
            ))}
          </select>
        </div>

        <div>
          <h4 className="text-sm font-medium text-gray-700">Compare Years:</h4>
          <div className="flex space-x-4">
            <select className="w-1/2 p-2 border rounded-md" value={compareYear1} onChange={(e) => setCompareYear1(e.target.value)}>
              <option value="">-- Select Year --</option>
              {years.map((year) => (
                <option key={year} value={year}>{year}</option>
              ))}
            </select>
            <select className="w-1/2 p-2 border rounded-md" value={compareYear2} onChange={(e) => setCompareYear2(e.target.value)}>
              <option value="">-- Select Year --</option>
              {years.map((year) => (
                <option key={year} value={year}>{year}</option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Select Comparison Type:</label>
          <select className="w-full p-2 border rounded-md" value={comparisonType} onChange={(e) => setComparisonType(e.target.value)}>
            <option value="">-- Select Comparison Type --</option>
            <option value="monthly">Monthly</option>
            <option value="quarterly">Quarterly</option>
            <option value="half-yearly">Half-Yearly</option>
            <option value="yearly">Yearly</option>
          </select>
        </div>
      </div>

      {comparisonType && (
        <div className="mt-6">
          <h3 className="text-lg font-semibold">{comparisonType.charAt(0).toUpperCase() + comparisonType.slice(1)} Comparison</h3>
          <Bar data={generateChartData(comparisonType)} />
        </div>
      )}
    </div>
  );
};

export default SalesComparison;