import { Navigate, Route, Routes } from "react-router-dom";
import ProjectsPage from "./pages/Projects/ProjectsPage";
import CreateVacancyPage from "./pages/Vacancies/CreateVacancyPage";
import CreateProjectPage from "./pages/Projects/CreateProjectPage";
import ReadyProjectPage from "./pages/Projects/ReadyProjectPage";
import CreatedVacancyPage from "./pages/Vacancies/CreatedVacancyPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/projects" replace />} />
      <Route path="/projects" element={<ProjectsPage />} />
      <Route path="/readyProject/:id" element={<ReadyProjectPage />} />
      <Route path="/createProject" element={<CreateProjectPage />} />
      <Route path="/createVacancy" element={<CreateVacancyPage />} />
      <Route path="/createdVacancy/:id" element={<CreatedVacancyPage />} />
    </Routes>
  );
}

export default App;
