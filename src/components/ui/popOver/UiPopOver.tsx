import React from "react";
import { ConfigProvider, Popover, PopoverProps } from "antd";
import { useSelectors } from "../../../hooks";
import { usePopOverMode } from "./usePopOverMode";

const UiPopOver: React.FC<PopoverProps> = (props) => {
  const { mode } = useSelectors();
  const theme = usePopOverMode(mode);

  return (
    <ConfigProvider theme={{ token: theme }}>
      <Popover {...props} />
    </ConfigProvider>
  );
};

export { UiPopOver };
