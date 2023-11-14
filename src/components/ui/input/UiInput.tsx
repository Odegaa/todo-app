import { ConfigProvider, Input, InputProps } from "antd";
import React from "react";
import { useSelectors } from "../../../hooks";
import { useInputTextArea } from "./useInputTextArea";

const UiInput: React.FC<InputProps> = (props) => {
  const { mode } = useSelectors();
  const theme = useInputTextArea(mode);

  return (
    <ConfigProvider theme={{ token: theme }}>
      <Input {...props} />
    </ConfigProvider>
  );
};

export { UiInput };
