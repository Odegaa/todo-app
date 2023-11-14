import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { IoMdAdd } from "react-icons/io";
import clsx from "clsx";

import { DrawerRoute } from "./drawer/drawerRoute/DrawerRoute";
import { DrawerInfo } from "./drawer/drawerInfo/DrawerInfo";
import Header from "./header/Header";
import Head from "./head/Head";
import { Footer } from "./footer/Footer";
import { UiFloatButton } from "../ui";
import { useSelectors, useActions, useResponsive, useLabel } from "../../hooks";

import style from "./Layout.module.scss";

const Layout: React.FC = () => {
  const { pathname } = useLocation();
  const { t } = useTranslation();

  const { drawerShowRoute, drawerShowInfo } = useSelectors();
  const { setLabel, toggleModal } = useActions();
  const label = useLabel(pathname);
  const { isMobile } = useResponsive(1200);

  React.useEffect(() => {
    if (label) setLabel(label);
    else setLabel("/");
  }, [label, setLabel]);

  return (
    <div className={style.layout}>
      <DrawerRoute />
      <DrawerInfo />
      <main
        className={clsx(
          style.main,
          !drawerShowRoute && style.activeRoute,
          !drawerShowInfo && style.activeInfo
        )}>
        <Header />
        <Head />
        <Outlet />
        <Footer />
      </main>
      {isMobile && (
        <UiFloatButton
          onClick={() => toggleModal()}
          icon={<IoMdAdd />}
          tooltip={t("add text")}
        />
      )}
    </div>
  );
};

export { Layout };
