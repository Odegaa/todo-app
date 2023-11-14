import React from "react";
import { ITaskItem } from "../../../../../store/tasks/tasks.types";
import style from "./HeaderTodayTask.module.scss";

type THeaderTodayTask = {
  data?: ITaskItem[];
};

const HeaderTodayTask: React.FC<THeaderTodayTask> = ({ data }) => (
  <ul className={style.today}>
    {data &&
      data.map((task, index) => (
        <li key={task.id}>{`${index + 1}. ${task.title}`}</li>
      ))}
  </ul>
);

export default HeaderTodayTask;
