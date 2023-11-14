import React from "react";
import { DatePickerProps, Form, message } from "antd";
import { useTranslation } from "react-i18next";
import dayjs from "dayjs";

import {
  UiModal,
  UiInputTextArea,
  UiInput,
  UiDatePicker,
  UiSelect,
  UiCheckbox,
  UiButton,
} from "../../ui";

import {
  useAddTaskMutation,
  useEditTaskMutation,
} from "../../../store/index.endpoints";

import { useActions, useSelectors } from "../../../hooks";

import { ITaskItem } from "../../../store/tasks/tasks.types";
import { dateFormat } from "../../../utils/data/Date";
import { lowerCase } from "../../../utils/lowerCase/lowerCase";
import style from "./TaskForm.module.scss";

const TaskForm: React.FC = () => {
  const [dateValue, setDateValue] = React.useState("");
  const { t } = useTranslation();
  const [form] = Form.useForm();

  const [
    addTask,
    { isLoading: addLoading, isSuccess: addSuccess, isError: addError },
  ] = useAddTaskMutation();

  const [
    editTask,
    { isLoading: editLoading, isSuccess: editSuccess, isError: editError },
  ] = useEditTaskMutation();

  const { modalShow, task } = useSelectors();
  const { toggleModal, setTask } = useActions();

  const onChangeDataPicker: DatePickerProps["onChange"] = (_, dateString) => {
    setDateValue(dateString);
  };

  const onModalCancel = () => {
    toggleModal();
    form.resetFields();
  };

  const onFinish = async (values: ITaskItem) => {
    if (task) await editTask({ ...values, date: dateValue, id: task.id });
    else {
      await addTask({
        ...values,
        completed: !!values.completed,
        important: !!values.important,
        date: dateValue,
      });
    }
  };

  React.useEffect(() => {
    if (addSuccess) return message.success(t("successTask"));
    if (editSuccess) return message.success(t("successEditTask"));
    if (addError || editError) return message.error(t("errorTask"));
  }, [addSuccess, editSuccess, addError, editError]);

  React.useEffect(() => {
    if (addLoading || editLoading) {
      toggleModal();
      setTask(null);
      form.resetFields();
    }
  }, [addLoading, editLoading]);

  React.useEffect(() => {
    if (task) {
      form.setFieldsValue({
        ...task,
        date: dayjs(task.date, dateFormat),
      });
    }
  }, [form, task]);

  return (
    <UiModal
      title={task ? t("editTask") : t("addTask")}
      open={modalShow}
      footer={false}
      onCancel={onModalCancel}
      centered>
      <Form
        name="task"
        className={style.taskForm}
        form={form}
        layout="vertical"
        onFinish={onFinish}
        size="large">
        <Form.Item
          label={t("formTitle")}
          name="title"
          rules={[
            {
              required: true,
              message: `${t("requiredMessage")} ${lowerCase(t("formTitle"))}!`,
            },
          ]}>
          <UiInput placeholder={`${t("formPlaceholderEg")}`} />
        </Form.Item>
        <Form.Item
          label={t("formDate")}
          name="date"
          rules={[
            {
              required: true,
              message: `${t("requiredMessage")} ${lowerCase(t("formDate"))}!`,
            },
          ]}>
          <UiDatePicker
            onChange={onChangeDataPicker}
            placeholder={`${t("selectDate")}`}
            format={dateFormat}
          />
        </Form.Item>
        <Form.Item
          label={t("formDescription")}
          name="description"
          rules={[
            {
              required: true,
              message: `${t("requiredMessage")} ${lowerCase(
                t("formDescription")
              )}!`,
            },
          ]}>
          <UiInputTextArea placeholder={`${t("formPlaceholderEg")}`} />
        </Form.Item>
        <Form.Item
          label={t("formDirectory")}
          name="catalogue"
          rules={[
            {
              required: true,
              message: `${t("requiredMessage")} ${lowerCase(t("formTitle"))}!`,
            },
          ]}>
          <UiSelect
            placeholder={t("selectDirectory")}
            options={[
              { value: "Main", label: "Main" },
              { value: "Music", label: "Music" },
            ]}
          />
        </Form.Item>
        <Form.Item name="important" valuePropName="checked">
          <UiCheckbox>{t("markImportant")}</UiCheckbox>
        </Form.Item>
        <Form.Item name="completed" valuePropName="checked">
          <UiCheckbox>{t("markCompeleted")}</UiCheckbox>
        </Form.Item>

        <Form.Item>
          <UiButton
            loading={task ? editLoading : addLoading}
            block
            htmlType="submit">
            {task ? t("editTask") : t("addTask")}
          </UiButton>
        </Form.Item>
      </Form>
    </UiModal>
  );
};

export { TaskForm };
