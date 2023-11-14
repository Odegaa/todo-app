import { ConfigProvider } from "antd";
import { TextAreaProps } from "antd/es/input";
import TextArea from "antd/es/input/TextArea";
import React from "react";
import { useSelectors } from "../../../hooks";
import { useInputTextArea } from "./useInputTextArea";

const UiInputTextArea: React.FC<TextAreaProps> = (props) => {
  const { mode } = useSelectors();
  const theme = useInputTextArea(mode);

  return (
    <ConfigProvider theme={{ token: theme }}>
      <TextArea {...props} />
    </ConfigProvider>
  );
};

export { UiInputTextArea };
