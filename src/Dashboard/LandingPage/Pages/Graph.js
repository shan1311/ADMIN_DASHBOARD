import React, { useEffect, useRef, useState } from 'react';
import { Line } from 'react-chartjs-2';
import axios from 'axios';
import { Chart, LineController } from 'chart.js';

Chart.register(LineController); // Register the LineController

const Graph = () => {
  const chartRef = useRef(null);
  const [studentProgress, setStudentProgress] = useState([]);
  const [studentGoals, setStudentGoals] = useState([]);
  const studentId = 1; // Replace with the actual student ID
  let chartInstance = null;

  useEffect(() => {
    fetchStudentData();
  }, []);

  const fetchStudentData = async () => {
    try {
      const [progressResponse, goalsResponse] = await Promise.all([
        axios.get(`http://localhost:8000/api/api/students/${studentId}/progress/`),
        axios.get(`http://localhost:8000/api/api/students/${studentId}/goals/`),
      ]);
      setStudentProgress(progressResponse.data);
      setStudentGoals(goalsResponse.data);
    } catch (error) {
      console.error('Error fetching student data:', error);
    }
  };

  const updateChart = () => {
    if (chartInstance) {
      chartInstance.destroy();
    }

    const chartData = prepareChartData();

    chartInstance = new Chart(chartRef.current, {
      type: 'line',
      data: chartData,
      options: {
        responsive: true,
      },
    });
  };

  const prepareChartData = () => {
    const progressLabels = studentProgress.map(data => data.date);
    const progressValues = studentProgress.map(data => data.progress);
    const predictionLabels = studentGoals.map(goal => goal.date);
    const predictionValues = studentGoals.map(goal => goal.prediction);

    const chartData = {
      labels: [
        ...progressLabels.map(date => date.toLocaleDateString()),
        ...predictionLabels.map(date => date.toLocaleDateString())
      ],
      datasets: [
        {
          label: 'Progress',
          data: progressValues,
          fill: false,
          borderColor: 'rgba(75, 192, 192, 1)',
          tension: 0.1,
        },
        {
          label: 'Prediction',
          data: [...progressValues, ...predictionValues],
          fill: false,
          borderColor: 'rgba(255, 99, 132, 1)',
          tension: 0.1,
        },
      ],
    };

    return chartData;
  };

  useEffect(() => {
    updateChart();
  }, [studentProgress, studentGoals]);

  return (
    <div>
      <h2>Graph Component</h2>
      <canvas ref={chartRef} />
    </div>
  );
};

export default Graph;
