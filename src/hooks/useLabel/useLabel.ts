import { getRoutes } from "../../components/layouts/routes";

export const useLabel = (path: string) =>
  getRoutes().find((element) => element.key === path)?.label;
