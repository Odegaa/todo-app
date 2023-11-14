import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelectors } from "../../../../../hooks";
import { useActions } from "../../../../../hooks/useActions/useActions";
import { useResponsive } from "../../../../../hooks/useResponsive/useResponsive";
import { useDrawerRouteMode } from "./useDrawerRouteMenu";
import { getRoutes } from "../../../routes";
import { ConfigProvider, Menu, MenuProps } from "antd";

const DrawerRouteMenu: React.FC = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { mode } = useSelectors();
  const { toggleDrawerRoute } = useActions();
  const { isMobile } = useResponsive(1200);
  const theme = useDrawerRouteMode(mode);
  const route = getRoutes();

  const onClickRoute: MenuProps["onClick"] = (e) => {
    navigate(e.key);
    if (isMobile) toggleDrawerRoute();
  };

  return (
    <ConfigProvider theme={{ token: theme }}>
      <Menu
        mode="inline"
        selectedKeys={[pathname]}
        onClick={onClickRoute}
        items={route}
      />
    </ConfigProvider>
  );
};

export { DrawerRouteMenu };
