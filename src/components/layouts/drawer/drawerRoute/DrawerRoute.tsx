import React from "react";
import { useSelectors } from "../../../../hooks";
import { useResponsive } from "../../../../hooks/useResponsive/useResponsive";
import { useActions } from "../../../../hooks/useActions/useActions";
import { useTranslation } from "react-i18next";
import { Drawer } from "antd";
import { UiButton } from "../../../ui/button/UiButton";
import { DrawerRouteMenu } from "./drawerRouteMenu/DrawerRouteMenu";

import style from "./DrawerRoute.module.scss";
import clsx from "clsx";

const DrawerRoute: React.FC = () => {
  const [isDrawer, setIsDrawer] = React.useState<boolean>(false);
  const { mode, drawerShowRoute } = useSelectors();

  const { isMobile } = useResponsive(1200);
  const { toggleDrawerRoute, toggleModal } = useActions();
  const { t } = useTranslation();
  const onCloseDrawer = () => toggleDrawerRoute();

  React.useEffect(() => {
    isMobile ? setIsDrawer(!drawerShowRoute) : setIsDrawer(drawerShowRoute);
  }, [drawerShowRoute, isMobile]);

  return (
    <Drawer
      placement="left"
      width={256}
      onClose={onCloseDrawer}
      closable={false}
      zIndex={240}
      open={isDrawer}
      mask={isMobile}>
      <div className={clsx(style.drawer, mode === "dark" && style.dark)}>
        <div className={style.submenu}>
          <h2>{t("title")}</h2>
          <UiButton onClick={() => toggleModal()}>{t("addText")}</UiButton>
        </div>
        <div className={style.menu}>
          <DrawerRouteMenu />
        </div>
      </div>
    </Drawer>
  );
};

export { DrawerRoute };
