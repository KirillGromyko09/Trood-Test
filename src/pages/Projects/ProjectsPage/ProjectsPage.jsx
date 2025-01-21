import { Container } from "@mui/material";
import MainHeader from "../../../components/Headers/MainHeader/index.js";
import SideBar from "../../../components/Sidebar/SideBar.jsx";

const ProjectsPage = ()=> {

  const projectsNavItems = [
    { label: "Main page", path: "/" },
    { label: "Projects", path: "/projects" },
    { label: "Vacancies", path: "/createVacancy" },
    { label: "People", path: "/people" },
    { label: "Tests", path: "/tests" },
    { label: "Settings", path: "/settings" },
  ];
  return (
    <Container>
      <MainHeader />
      <SideBar navItems={projectsNavItems} />
    </Container>
  )
}
export default ProjectsPage;
