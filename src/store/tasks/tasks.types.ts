export type ITaskItem = {
  title: string;
  catalogue: string;
  description: string;
  date: string;
  completed: boolean;
  important: boolean;
  id: string;
};
export interface ITask {
  task: ITaskItem | null;
}
