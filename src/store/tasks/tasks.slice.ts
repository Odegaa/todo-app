import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { ITask, ITaskItem } from "./tasks.types";

const initialState: ITask = {
  task: null,
};

const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    setTask(state, { payload }: PayloadAction<ITaskItem | null>) {
      state.task = payload;
    },
  },
});
export const { reducer, actions } = taskSlice;
