import React from "react";

import { useGetTasksQuery } from "../../../store/index.endpoints";
import { useTranslation } from "react-i18next";

import style from "./Head.module.scss";
import { useFilterTasks } from "../../../hooks/useFilterTasks/useFilterTasks";
import { useSelectors } from "../../../hooks";
import { Skeleton } from "antd";

const Head: React.FC = () => {
  const { data = [], isLoading } = useGetTasksQuery(null);
  const { t } = useTranslation();

  const filterTasks = useFilterTasks({ data });
  const { menuLabel } = useSelectors();

  if (menuLabel === "/") return null;
  if (isLoading)
    return <Skeleton.Input size="small" style={{ width: "300px" }} active />;
  return (
    <h2 className={style.head}>
      {`${menuLabel} (${filterTasks ? filterTasks.length : 0} ${t("tasks")})`}
    </h2>
  );
};

export default Head;
