import React from "react";
import Sidebar from "../../../components/Sidebar/index.js";
import { Container } from "@mui/material";
import MainHeader from "../../../components/Headers/MainHeader/index.js";

const ListVacancyPage = () => {
  const vacanciesNavItems = ["Main page", "Projects", "Vacancies", "People", "Tests",'Activities' , "Settings"];
  return (
    <Container>
      <MainHeader />
      <Sidebar navItems={vacanciesNavItems} />
    </Container>



  );
};

export default ListVacancyPage;
