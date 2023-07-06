import axios from 'axios';

export const BASE_URL = 'http://localhost:8000/api';

export const fetchCourses = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/courses/`);
    return response.data;
  } catch (error) {
    console.error('Error fetching courses:', error);
    return [];
  }
};
