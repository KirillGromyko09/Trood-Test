import routeNames from "./routeNames.js";
import ProjectsPage from "../pages/Projects/ProjectsPage/index.js";
import CreateProjectPage from "../pages/Projects/CreateProjectPage/index.js";
import CreateVacancyPage from "../pages/Vacancies/CreateVacancyPage/index.js";

const routerObjects = [
  {
    id: 1,
    path: routeNames.ProjectsPage,
    element: ProjectsPage,
  },
  {
    id: 2,
    path: routeNames.CreateProjectPage,
    element: CreateProjectPage,
  },
  {
    id: 3,
    path: routeNames.CreateVacancyPage,
    element: CreateVacancyPage,
  }

];
export default routerObjects;
