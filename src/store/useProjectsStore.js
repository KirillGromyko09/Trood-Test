import { create } from "zustand";
import { loadFromLocalStorage, saveToLocalStorage } from "../utils/storage/storageService.js";

const LOCAL_STORAGE_KEY = "projects";


export const useProjectsStore = create((set) => ({
  projects: loadFromLocalStorage(LOCAL_STORAGE_KEY) || [],

  addProject: (project) =>
    set((state) => {
      const updatedProjects = [...state.projects, project];
      const updatedWithStatus = updateProjectsStatus(updatedProjects);
      saveToLocalStorage(LOCAL_STORAGE_KEY, updatedWithStatus);
      return { projects: updatedWithStatus };
    }),

  removeProject: (id) =>
    set((state) => {
      const updatedProjects = state.projects.filter((p) => p.id !== id);
      const updatedWithStatus = updateProjectsStatus(updatedProjects);
      saveToLocalStorage(LOCAL_STORAGE_KEY, updatedWithStatus);
      return { projects: updatedWithStatus };
    }),

  loadProjects: () =>
    set(() => {
      const loadedProjects = loadFromLocalStorage(LOCAL_STORAGE_KEY);
      const updatedWithStatus = updateProjectsStatus(loadedProjects);
      return { projects: updatedWithStatus };
    }),

  updateAllProjectsStatus: () =>
    set((state) => {
      const updatedProjects = updateProjectsStatus(state.projects);
      saveToLocalStorage(LOCAL_STORAGE_KEY, updatedProjects);
      return { projects: updatedProjects };
    }),
}));

const updateProjectsStatus = (projects) => {
  const now = Date.now();
  return projects.map((project) => ({
    ...project,
    isPast: now > project.deadlineTimestamp,
  }));
};
