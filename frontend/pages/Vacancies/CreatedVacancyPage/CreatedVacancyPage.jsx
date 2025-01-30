import { Box } from "@mui/material";
import MainHeader from "../../../components/Headers/MainHeader";
import SideBar from "../../../components/Sidebar";
import CreatedVacancy from "../../../components/CreatedVacancy";

const CreateVacancyPage = () => {

  const vacanciesNavItems = [
    { label: "Main page", path: "/" },
    { label: "Projects", path: "/projects" },
    { label: "Vacancies", path: "/createVacancy" },
    { label: "People", path: "/people" },
    { label: "Tests", path: "/tests" },
    { label: "Settings", path: "/settings" },
  ];
  return (
    <Box sx={{width: '1440px' , height: '1024px'}}>
      <MainHeader />
      <Box sx={{display:'flex', marginTop: '40px'}}>
        <SideBar navItems={vacanciesNavItems} />
        <CreatedVacancy />
      </Box>
    </Box>



  );
};

export default CreateVacancyPage;
