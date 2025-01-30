import routerObjects from "./routerObjects.js";
import { Route, Routes } from "react-router-dom";
import React from "react";

const routerConfig = () => {
  const routes = () => {
    return routerObjects.map(({ id, path, element: Element }) => {
      return <Route key={id} path={path} element={Element} />;
    });
  };
  return <Routes>{routes()}</Routes>;
};
export default routerConfig;
