import React from "react";
import { Route, Routes } from "react-router-dom";

import { Layout } from "./components/layouts/Layout";
import { routes } from "./components/routes";
import { useSelectors } from "./hooks";

import style from "./assets/styles/App.module.scss";
import clsx from "clsx";

const App: React.FC = () => {
  const { mode } = useSelectors();

  return (
    <div className={clsx(style.app, mode === "dark" && style.dark)}>
      <Routes>
        <Route path="/" element={<Layout />}>
          {routes.map(({ path, element }) => (
            <Route key={path} path={path} element={element} />
          ))}
        </Route>
      </Routes>
    </div>
  );
};

export { App };
