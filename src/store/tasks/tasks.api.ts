import { api } from "../index.api";

import { ITaskItem } from "./tasks.types";

export const tasksApi = api.injectEndpoints({
  endpoints: (build) => ({
    getTasks: build.query<ITaskItem[], string | null>({
      query: (value) => ({
        url: `/tasks?${value ? `search=${value}` : ""}`,
      }),
      providesTags: ["tasks"],
    }),
    addTask: build.mutation<ITaskItem, ITaskItem>({
      query: (body) => ({
        url: "/tasks",
        method: "POST",
        body,
      }),
      invalidatesTags: ["tasks"],
    }),
    editTask: build.mutation<void, ITaskItem>({
      query: (body) => ({
        url: `/tasks/${body.id}`,
        method: "PUT",
        body,
      }),
      invalidatesTags: ["tasks"],
    }),
    editTaskCompleted: build.mutation<void, ITaskItem>({
      query: (body) => ({
        url: `/tasks/${body.id}`,
        method: "PUT",
        body,
      }),
      invalidatesTags: ["tasks"],
    }),
    editTaskImportant: build.mutation<void, ITaskItem>({
      query: (body) => ({
        url: `/tasks/${body.id}`,
        method: "PUT",
        body,
      }),
      invalidatesTags: ["tasks"],
    }),
    deleteTask: build.mutation<void, string>({
      query: (id) => ({
        url: `/tasks/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["tasks"],
    }),
  }),
});
