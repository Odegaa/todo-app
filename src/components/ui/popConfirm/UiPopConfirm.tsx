import { ConfigProvider, Popconfirm, PopconfirmProps } from "antd";
import React from "react";
import { useSelectors } from "../../../hooks";
import { usePopConfirmMode } from "./usePopConfirmMode";

const UiPopConfirm: React.FC<PopconfirmProps> = (props) => {
  const { mode } = useSelectors();
  const theme = usePopConfirmMode(mode);

  return (
    <ConfigProvider theme={{ token: theme }}>
      <Popconfirm {...props} />
    </ConfigProvider>
  );
};

export { UiPopConfirm };
