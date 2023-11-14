import React from "react";
import { useTranslation } from "react-i18next";
import { useGetTasksQuery } from "../../../../store/index.endpoints";
import {UiPopOver} from "../../../ui/popOver/UiPopOver";
import { Badge } from "antd";
import { BsFillBellFill } from "react-icons/bs";
import HeaderTodayTask from "./todayTask/HeaderTodayTask";

const HeaderBadge: React.FC = () => {
  const { t } = useTranslation();
  const { data } = useGetTasksQuery(null);
  const uncompleted = data && data.filter((task) => !task.completed);

  return (
    <UiPopOver
      title={t("uncompleted")}
      content={
        uncompleted?.length ? (
          <HeaderTodayTask data={uncompleted} />
        ) : (
          t("notTask")
        )
      }
      trigger={"click"}
      placement="bottomRight">
      <Badge count={uncompleted?.length} color="red" size="small">
        <BsFillBellFill color="#5B21B6" size={25} cursor="pointer" />
      </Badge>
    </UiPopOver>
  );
};

export default HeaderBadge;
