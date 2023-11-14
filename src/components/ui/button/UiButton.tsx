import React from "react";
import { Button, ButtonProps, ConfigProvider } from "antd";

const UiButton: React.FC<ButtonProps> = (props) => (
  <ConfigProvider
    theme={{
      token: {
        colorPrimary: "#5B21B6",
      },
    }}>
    <Button {...props} type="primary" />
  </ConfigProvider>
);

export { UiButton };
