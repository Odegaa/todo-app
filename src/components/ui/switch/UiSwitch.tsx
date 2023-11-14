import React from "react";
import { ConfigProvider, Switch, SwitchProps } from "antd";

const UiSwitch: React.FC<SwitchProps> = (props) => (
  <ConfigProvider theme={{ token: { colorPrimary: "#0f172a" } }}>
    <Switch {...props} />
  </ConfigProvider>
);

export { UiSwitch };
