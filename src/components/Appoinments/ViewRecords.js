import React, { useEffect, useState } from 'react';
import { Line, Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import './ViewRecords.css'; 

// Register the necessary chart components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const ViewRecords = () => {
  const [isEntering, setIsEntering] = useState(false);

  useEffect(() => {
    // Start animation on mount
    setIsEntering(true);
  }, []);

  const data1 = {
    labels: [100, 100,101, 103,100,101.4,99.5,100.3,101.2,100,99.8],
    datasets: [{
      label: "Oxygen Level",
      fill: false,
      lineTension: 0,
      backgroundColor: "rgba(0,0,255,1.0)",
      borderColor: "rgba(0,0,255,0.1)",
      data: [20, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31]
    }]
  };

  const data2 = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [{
      label: "Temperature",
      fill: true,
      backgroundColor: "rgba(255,0,0,0.5)",
      borderColor: "rgba(255,0,0,1.0)",
      data: [97.7, 98.2, 97, 98, 97, 97, 98, 97, 98, 97, 98, 97]
    }]
  };

  const data3 = {
    labels: [3, 5, 7, 9, 13, 17, 20, 25, 28, 29, 30],
    datasets: [{
      label: "Blood Pressure",
      fill: false,
      lineTension: 0,
      backgroundColor: "rgba(0,255,0,1.0)",
      borderColor: "rgba(0,255,0,0.1)",
      data: [97, 97, 98, 97, 99, 100, 99.5, 98, 98, 98.3, 98.4]
    }]
  };

  const options1 = {
    legend: { display: true },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Time (minutes)'
        }
      },
      y: {
        min: 15,
        max: 35,
        title: {
          display: true,
          text: 'Oxygen Level (units)'
        }
      }
    }
  };

  const options2 = {
    legend: { display: true },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Months'
        }
      },
      y: {
        min: 85,
        max: 100,
        title: {
          display: true,
          text: 'Temperature (F)'
        }
      }
    }
  };

  const options3 = {
    legend: { display: true },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Date'
        }
      },
      y: {
        min: 80,
        max: 120,
        title: {
          display: true,
          text: 'Blood Pressure (mmHg)'
        }
      }
    }
  };

  return (
    <div className="fullscreen-image">
      <div className="charts-container">
        <div className={`chart-card ${isEntering ? 'left-card' : ''}`}>
          <h3>Oxygen Level</h3>
          <Line data={data1} options={options1} />
        </div>
        <div className={`chart-card ${isEntering ? 'middle-card' : ''}`}>
          <h3>Temperature</h3>
          <Bar data={data2} options={options2} />
        </div>
        <div className={`chart-card ${isEntering ? 'right-card' : ''}`}>
          <h3>Blood Pressure</h3>
          <Line data={data3} options={options3} />
        </div>
      </div>
    </div>
  );
}

export default ViewRecords;
