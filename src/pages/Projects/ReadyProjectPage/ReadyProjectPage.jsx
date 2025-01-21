import { Container } from "@mui/material";
import MainHeader from "../../../components/Headers/MainHeader/index.js";
import SideBar from "../../../components/Sidebar/SideBar.jsx";

const ReadyProjectPage = ()=> {
  const projectsNavItems = ["Main page", "Projects", "Vacancies", "People", "Tests", "Settings"];
  return (
    <Container>
      <MainHeader />
      <SideBar navItems={projectsNavItems} />
    </Container>
  )
}
export default ReadyProjectPage;
