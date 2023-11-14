import React from "react";
import { ITaskItem } from "../../../../store/tasks/tasks.types";
import { useTranslation } from "react-i18next";
import { useActions } from "../../../../hooks/useActions/useActions";
import {
  useDeleteTaskMutation,
  useEditTaskCompletedMutation,
  useEditTaskImportantMutation,
} from "../../../../store/index.endpoints";
import { message } from "antd";
import { useSelectors } from "../../../../hooks";
import { useResponsive } from "../../../../hooks/useResponsive/useResponsive";
import { AiFillCheckCircle, AiFillDelete, AiFillStar } from "react-icons/ai";
import { IoMdCalendar } from "react-icons/io";
import { MdCancel } from "react-icons/md";
import clsx from "clsx";
import { UiPopConfirm } from "../../../ui";
import { HiEllipsisVertical } from "react-icons/hi2";
import style from "./TaskItem.module.scss";

const TaskItem: React.FC<ITaskItem> = (task) => {
  const { t } = useTranslation();
  const { toggleModal, setTask } = useActions();
  const { completed, date, catalogue, description, important, title, id } =
    task;

  const [deleteTask] = useDeleteTaskMutation();
  const [editImportant, { isLoading: importantLoading }] =
    useEditTaskImportantMutation();
  const [editCompleted, { isLoading: completedLoading }] =
    useEditTaskCompletedMutation();

  const onToggleEditTask = () => {
    toggleModal();
    setTask(task);
  };

  const showDeleteConfirm = async () => {
    await deleteTask(id);
    message.success(t("successDelete"));
  };

  const onEditImportant = async () => {
    await editImportant({ ...task, important: !important });
  };

  const onEditCompleted = async () => {
    await editCompleted({ ...task, completed: !completed });
  };

  const { mode } = useSelectors();
  const { isMobile } = useResponsive(770);

  return (
    <div className={clsx(style.taskItem, mode === "dark" && style.dark)}>
      <div className={style.catalogue}>{catalogue}</div>
      <div className={style.content}>
        <h4>{title}</h4>
        <p>{description}</p>
        <div className={style.date}>
          <IoMdCalendar />
          <span>{date.substring(0, 10)}</span>
        </div>
      </div>
      <div className={style.status}>
        <span
          className={clsx(style.statusCheck, completedLoading && style.active)}
          onClick={onEditCompleted}>
          {isMobile ? (
            completed ? (
              <AiFillCheckCircle className={style.checkCircle} />
            ) : (
              <MdCancel classname={style.checkCancel} />
            )
          ) : completed ? (
            <span className={style.checkCompleteText}>
              {t("completedText")}
            </span>
          ) : (
            <span className={style.checkUnCompletedText}>
              {t("uncompletedText")}
            </span>
          )}
        </span>
        <span className={style.statusEdit}>
          <AiFillStar
            onClick={onEditImportant}
            className={clsx(
              style.editIcon,
              important && style.active,
              importantLoading && style.activeStatus
            )}
          />
          <UiPopConfirm
            title={title}
            description={t("deletedDescription")}
            onConfirm={showDeleteConfirm}
            okText={t("okText")}
            cancelText={t("cancelText")}>
            <AiFillDelete className={style.editIcon} />
          </UiPopConfirm>
          <HiEllipsisVertical
            className={style.editIcon}
            onClick={onToggleEditTask}
          />
        </span>
      </div>
    </div>
  );
};

export default TaskItem;
