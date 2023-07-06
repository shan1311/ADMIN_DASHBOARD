import React from 'react';

const CourseCard = ({ course, onUpdateStatus }) => {
  const handleStatusChange = (event) => {
    const newStatus = event.target.value;
    onUpdateStatus(course.id, newStatus);
  };

  return (
    <div className="course-card">
      <h4>{course.name}</h4>
      <p>{course.description}</p>
      <p>Status: {course.status}</p>
      <p>Date: {course.date}</p>
      <p>Rating: {course.rating}</p>
      <a href={course.link} target="_blank" rel="noopener noreferrer">
        Go to Course
      </a>
      <select value={course.status} onChange={handleStatusChange}>
        <option value="completed">Completed</option>
        <option value="pending">Pending</option>
        <option value="ongoing">Ongoing</option>
      </select>
    </div>
  );
}

export default CourseCard;
