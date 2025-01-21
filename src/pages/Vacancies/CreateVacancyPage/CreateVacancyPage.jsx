import React from "react";
import Sidebar from "../../../components/Sidebar/index.js";
import { Container } from "@mui/material";
import MainHeader from "../../../components/Headers/MainHeader/index.js";

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
    <Container>
      <MainHeader />
      <Sidebar navItems={vacanciesNavItems} />
    </Container>



  );
};

export default CreateVacancyPage;
