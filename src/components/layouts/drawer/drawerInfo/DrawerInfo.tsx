import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { FaUserAlt } from "react-icons/fa";
import { Avatar, Drawer } from "antd";
import clsx from "clsx";

import { useGetTasksQuery } from "../../../../store/index.endpoints";
import { useSelectors, useActions, useResponsive } from "../../../../hooks";
import DrawerInfoSwitch from "./drawerInfoSwitch/DrawerInfoSwitch";

import style from "./DrawerInfo.module.scss";

const DrawerInfo: React.FC = () => {
  const [isDrawer, setIsDrawer] = useState<boolean>(false);
  const { data } = useGetTasksQuery(null);

  const allTasks = data ? data.length : 1;
  const completedTasks = data
    ? data.filter((task) => task.completed).length
    : 1;

  const percentageAllTasks = (completedTasks * 100) / allTasks;

  const { mode, drawerShowInfo } = useSelectors();
  const { toggleDrawerInfo } = useActions();
  const { isMobile } = useResponsive(1200);

  const { t } = useTranslation();
  const onCloseDrawer = () => toggleDrawerInfo();

  useEffect(() => {
    if (isMobile) setIsDrawer(!drawerShowInfo);
    else setIsDrawer(drawerShowInfo);
  }, [drawerShowInfo, isMobile]);

  return (
    <Drawer
      placement="right"
      width={200}
      onClose={onCloseDrawer}
      closable={false}
      zIndex={240}
      open={isDrawer}
      mask={isMobile}>
      <div className={clsx(style.drawerInfo, mode === "dark" && style.dark)}>
        <div className={style.drawerInfoTop}>
          <div className={style.drawerInfoUser}>
            <h3>{t("userTitle")}</h3>
            <Avatar size={35} icon={<FaUserAlt />} />
          </div>
          <div className={style.drawerInfoMode}>
            <h3>{t("darkmode")}</h3>
            <DrawerInfoSwitch />
          </div>
          <div className={style.drawerInfoStatus}>
            <div className={style.drawerInfoStatusInfo}>
              <span>{t("all")}</span>
              <span>{`${completedTasks}/${allTasks}`}</span>
            </div>
            <div className={style.drawerInfoStatusSlider}>
              <div style={{ width: `${percentageAllTasks}%` }} />
            </div>
          </div>
        </div>
        <div className={style.drawerInfoBottom}>
          <a href="https://github.com/odegaa" target="_blank" rel="noreferrer">
            {t("author")}
          </a>
        </div>
      </div>
    </Drawer>
  );
};

export { DrawerInfo };
