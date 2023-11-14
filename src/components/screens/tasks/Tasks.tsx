import React from "react";
import clsx from "clsx";

import { useSelectors, useFilterTasks } from "../../../hooks";
import { useGetTasksQuery } from "../../../store/index.endpoints";
import NotTask from "./notTasks/NotTask";
import TaskItem from "./taskItem/TaskItem";
import TaskLoadingItem from "./loadingItem/TaskLoadingItem";

import style from "./Tasks.module.scss";

const Tasks: React.FC = React.memo(() => {
  const [tasksShow, setTasksShow] = React.useState(false);
  const [oneTaskShow, setOneTaskShow] = React.useState(false);

  const { searchValue } = useSelectors();
  const { data = [], isLoading, isSuccess } = useGetTasksQuery(searchValue);
  const filterData = useFilterTasks({ data });

  React.useEffect(() => {
    isSuccess && !filterData?.length ? setTasksShow(true) : setTasksShow(false);
  }, [filterData, isSuccess]);

  React.useEffect(() => {
    filterData && filterData.length === 1
      ? setOneTaskShow(true)
      : setOneTaskShow(false);
  }, [filterData]);

  return tasksShow ? (
    <NotTask />
  ) : (
    <div className={clsx(style.tasks, oneTaskShow && style.task)}>
      {isLoading
        ? [...Array(5)].map((_, index) => <TaskLoadingItem key={index} />)
        : filterData?.map((task) => <TaskItem key={task.id} {...task} />)}
    </div>
  );
});

export default Tasks;
