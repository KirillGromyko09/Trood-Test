import { Route, Routes } from "react-router-dom";
import ProjectsPage from "./pages/Projects/ProjectsPage";
import CreateVacancyPage from "./pages/Vacancies/CreateVacancyPage";
import CreateProjectPage from "./pages/Projects/CreateProjectPage";

function App() {
  return (
    <Routes>
      <Route path="/projects" element={<ProjectsPage />} />
      <Route path="/createVacancy" element={<CreateVacancyPage />} />
      <Route path="/createProject" element={<CreateProjectPage />} />
    </Routes>
  );
}

export default App;
