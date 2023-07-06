import React, { useEffect, useState } from 'react';
import axios from 'axios';

const OngoingCount = () => {
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

  const ongoingCount = courseData.filter(course => course.status === 'ongoing').length;

  return (
  
      <div>
        <h3>{ongoingCount}</h3>
      </div>
  );
};

export default OngoingCount;
