"use client";
import React from 'react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Filler,
} from "chart.js";
import { Line } from "react-chartjs-2";
const SalesOverviewChart = () => {

  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip,
    Filler
  );

  const data = {
    labels: ["Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [
      {
        label: "Mobile apps",
        data: [50, 30, 300, 220, 500, 250, 400, 230, 520],
        borderColor: "#5e72e4",
        backgroundColor: "rgba(94, 114, 228, 0.15)",
        tension: 0.4,
        fill: true,
        pointRadius: 4,
        pointBackgroundColor: "#5e72e4",
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
    },
    scales: {
      x: {
        grid: { display: false },
      },
      y: {
        grid: {
          borderDash: [5, 5],
        },
        ticks: {
          stepSize: 100,
        },
      },
    },
  } as any;
  return (
    <div className="card h-100 p-4 border-0 shadow-sm rounded-4">
      <h6 className="mb-1">Sales Overview</h6>
      <span className='mb-2'>
        4% more in 2021
      </span>

      <div style={{ height: "300px" }}>
        <Line data={data} options={options} />
      </div>
    </div>
  )
}

export default SalesOverviewChart