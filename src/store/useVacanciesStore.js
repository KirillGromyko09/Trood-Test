import { create } from "zustand";
import { loadFromLocalStorage, saveToLocalStorage } from "../utils/storage/storageService.js";


export const  useVacanciesStore = create((set) => ({
  vacancies: loadFromLocalStorage("vacancies") || [],

  addVacancy: (vacancy) =>
    set((state) => {
      const updatedVacancies = [...state.vacancies, vacancy];
      const updatedWithStatus = updateVacanciesStatus(updatedVacancies);
      saveToLocalStorage("vacancies", updatedWithStatus);
      return { vacancies: updatedWithStatus };
    }),

  removeVacancy: (id) =>
    set((state) => {
      const updatedVacancies = state.vacancies.filter((v) => v.id !== id);
      const updatedWithStatus = updateVacanciesStatus(updatedVacancies);
      saveToLocalStorage("vacancies", updatedWithStatus);
      return { vacancies: updatedWithStatus };
    }),


}));
const updateVacanciesStatus = (vacancies) => {
  const now = Date.now();
  return vacancies.map((vacancy) => ({
    ...vacancy,
    isPast: now > vacancy.deadlineTimestamp,
  }));
};
