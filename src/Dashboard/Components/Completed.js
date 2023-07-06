import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CompletedCount= () => {
  const [courseData, setCourseData] = useState([]);

  useEffect(() => {
    fetchCourseData();
  }, []);

  const fetchCourseData = async () => {
    try {
      const response = await axios.get('http://localhost:8000/api/courses/');
      setCourseData(response.data);
    } catch (error) {
      console.error('Error fetching course data:', error);
    }
  };

  const completedCount = courseData.filter(course => course.status === 'completed').length;

  return (
      <div>
        <h3>{completedCount}</h3>
      </div>
  );
};

export default CompletedCount;
