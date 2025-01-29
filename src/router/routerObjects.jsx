import routeNames from "./routeNames.js";
import ProjectsPage from "../pages/Projects/ProjectsPage";
import CreateProjectPage from "../pages/Projects/CreateProjectPage";
import CreateVacancyPage from "../pages/Vacancies/CreateVacancyPage";
import ReadyProjectPage from "../pages/Projects/ReadyProjectPage";
import CreatedVacancyPage from "../pages/Vacancies/CreatedVacancyPage";

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
    path: routeNames.ReadyProjectPage,
    element: ReadyProjectPage,
  },
  {
    id: 4,
    path: routeNames.CreateVacancyPage,
    element: CreateVacancyPage,
  },
  {
    id: 5,
    path: routeNames.CreatedVacancyPage,
    element: CreatedVacancyPage,
  }

];
export default routerObjects;
