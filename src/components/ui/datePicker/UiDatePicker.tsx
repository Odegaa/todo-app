import { ConfigProvider, DatePicker, DatePickerProps } from "antd";
import React from "react";

const UiDatePicker: React.FC<DatePickerProps> = (props) => (
  <ConfigProvider>
    <DatePicker {...props} style={{ width: "100%" }} />
  </ConfigProvider>
);

export { UiDatePicker };
