import axios from 'axios';

const API_URL = 'http://localhost:8080';

export const createVacancy = async (vacancy) => {
  try {
    const response = await axios.post(`${API_URL}/vacancies`, vacancy);
    return response.data;
  } catch (error) {
    console.error( error);
    throw error;
  }
};

export const getVacanciesByProjectId = async (projectId) => {
  try {
    const response = await axios.get(`${API_URL}/projects/${projectId}/vacancies`);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const deleteVacancy = async (vacancyId) => {
  try {
    await axios.delete(`${API_URL}/vacancies/${vacancyId}`);
  } catch (error) {
    console.error( error);
    throw error;
  }
};
