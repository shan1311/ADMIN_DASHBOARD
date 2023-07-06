import React, { useEffect, useState } from 'react';
import { fetchCourses,BASE_URL } from '../../../API-Services/CourseService';
import CourseCard from '../../Components/CourseCard';
import axios from 'axios';


const CourseList = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const coursesData = await fetchCourses();
      setCourses(coursesData);
    };

    fetchData();
  }, []);

  const handleUpdateStatus = async (courseId, newStatus) => {
    try {
      await axios.put(`${BASE_URL}/courses/${courseId}/status/`, { status: newStatus });
    } catch (error) {
      console.error('Error updating course status:', error);
    }
  };

  return (
    <div>
      <h2>Course List</h2>

      <div className="course-card-container">
        {courses.map(courses => (
          <CourseCard
            key={courses.id}
            course={courses}
            onUpdateStatus={handleUpdateStatus}
          />
        ))}
      </div>
    </div>
  );
};

export default CourseList;
