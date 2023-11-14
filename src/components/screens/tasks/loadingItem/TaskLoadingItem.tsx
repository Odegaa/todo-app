import { Skeleton } from "antd";
import React from "react";
import style from "./TaskLoadingItem.module.scss";

const TaskLoadingItem: React.FC = () => {
  return (
    <div className={style.taskItem}>
      <Skeleton />
    </div>
  );
};

export default TaskLoadingItem;
