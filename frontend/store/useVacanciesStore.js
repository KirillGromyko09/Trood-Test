import { create } from "zustand";
import axios from "axios";
import { loadFromLocalStorage, saveToLocalStorage } from "../utils/storage/storageService";

export const useVacanciesStore = create((set) => ({
  vacancies: loadFromLocalStorage("vacancies") || [],


  loadVacanciesByProjectId: async (projectId) => {
    try {
      const response = await axios.get(`http://localhost:8080/projects/${projectId}/vacancies`);
      const vacanciesWithStatus = response.data.map((vacancy) => ({
        ...vacancy,
        deadlineTimestamp: new Date(vacancy.deadline).getTime(),
      }));
      set({ vacancies: vacanciesWithStatus });
    } catch (error) {
      console.error( error);
    }
  },

  addVacancy: (vacancy) =>
    set((state) => {
      const updatedVacancies = [...state.vacancies, vacancy];
      saveToLocalStorage("vacancies", updatedVacancies);
      return { vacancies: updatedVacancies };
    }),


  removeVacancy: (id) =>
    set((state) => {
      const updatedVacancies = state.vacancies.filter((vacancy) => vacancy.id !== id);
      saveToLocalStorage("vacancies", updatedVacancies);
      return { vacancies: updatedVacancies };
    }),
}));
