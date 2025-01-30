
import { create } from "zustand";
import { loadFromLocalStorage, saveToLocalStorage } from "../utils/storage/storageService.js";
import { createProject } from "../api/projectsApi.js";
import axios from "axios";

const LOCAL_STORAGE_KEY = "projects";

export const useProjectsStore = create((set) => ({
  projects: loadFromLocalStorage(LOCAL_STORAGE_KEY) || [],

  addProject: async (projectData) => {
    try {
      const newProject = await createProject(projectData);
      const updatedProject = {
        ...newProject,
        isPast: new Date(newProject.deadline).getTime() < Date.now(),
      };

      set((state) => {
        const updatedProjects = [...state.projects, updatedProject];
        const updatedWithStatus = updateProjectsStatus(updatedProjects);
        saveToLocalStorage(LOCAL_STORAGE_KEY, updatedWithStatus);
        return { projects: updatedWithStatus };
      });
    } catch (error) {
      console.error("Error adding project", error);
    }
  },

  updateProject: (id, updatedProject) => set((state) => {
    const updatedProjects = state.projects.map((project) =>
      project.id === id ? { ...project, ...updatedProject, isPast: new Date(updatedProject.deadline).getTime() < Date.now() } : project
    );
    saveToLocalStorage(LOCAL_STORAGE_KEY, updatedProjects);
    return { projects: updatedProjects };
  }),


  removeProject: (id) =>
    set((state) => {
      const updatedProjects = state.projects.filter((p) => p.id !== id);
      const updatedWithStatus = updateProjectsStatus(updatedProjects);
      saveToLocalStorage(LOCAL_STORAGE_KEY, updatedWithStatus);
      return { projects: updatedWithStatus };
    }),


  loadProjects: async () => {
    try {
      const response = await axios.get('http://localhost:8080/projects');
      const projectsWithStatus = response.data.map((project) => {
        const isPast = new Date(project.deadline).getTime() < Date.now();
        return { ...project, isPast };
      });
      set((state) => ({ projects: projectsWithStatus }));
    } catch (error) {
      console.error("Error loading projects", error);
      set({ error: "Error loading projects" });
    }
  },

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
    isPast: new Date(project.deadline).getTime() < now,
  }));
};
