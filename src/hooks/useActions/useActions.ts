import React from "react";
import { useDispatch } from "react-redux";

import { bindActionCreators } from "@reduxjs/toolkit";

import { actions as shared } from "../../store/shared/shared.slice";
import { actions as task } from "../../store/tasks/tasks.slice";

const rootActions = { ...shared, ...task };

export const useActions = () => {
  const dispatch = useDispatch();

  return React.useMemo(
    () => bindActionCreators(rootActions, dispatch),
    [dispatch]
  );
};
