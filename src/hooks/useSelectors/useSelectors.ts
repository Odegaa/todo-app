import { TypedUseSelectorHook, useSelector } from "react-redux";
import { RootState } from "../../store";

const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useSelectors = () => {
  const { task, shared } = useAppSelector((state) => state);
  return { ...task, ...shared };
};
