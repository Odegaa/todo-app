import { useLocation } from "react-router-dom";
import { ITaskItem } from "../../store/tasks/tasks.types";
import React from "react";
import { todayDate } from "../../utils/data/Date";

type TUseFilterTasks = {
  data?: ITaskItem[];
};

export const useFilterTasks = ({ data }: TUseFilterTasks) => {
  const { pathname } = useLocation();
  const onFilterData = React.useCallback(
    (data?: ITaskItem[]) => {
      if (data) {
        switch (pathname) {
          case "/":
            return data;
          case "/today":
            return data.filter(
              (task) => task.date.substring(0, 10) === todayDate
            );
          case "/important":
            return data.filter((task) => task.important);
          case "/completed":
            return data.filter((task) => task.completed);
          case "/uncompleted":
            return data.filter((task) => !task.completed);
          default:
            return [];
        }
      }
    },
    [pathname]
  );

  const newFilterData = React.useMemo(
    () => onFilterData(data),
    [data, pathname]
  );

  return newFilterData;
};
