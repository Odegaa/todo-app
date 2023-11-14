import { ConfigProvider, Select, SelectProps } from "antd";
import React from "react";
import { useSelectors } from "../../../hooks";
import { useSelectMode } from "./useSelectMode";

const UiSelect: React.FC<SelectProps> = (props) => {
  const { mode } = useSelectors();
  const theme = useSelectMode(mode);

  return (
    <ConfigProvider theme={{ token: theme }}>
      <Select {...props} />
    </ConfigProvider>
  );
};

export { UiSelect };
