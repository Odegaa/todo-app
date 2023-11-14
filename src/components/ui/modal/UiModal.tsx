import React from "react";
import { ConfigProvider, Modal, ModalProps } from "antd";
import { useSelectors } from "../../../hooks";
import { useModalMode } from "./useModalMode";

const UiModal: React.FC<ModalProps> = (props) => {
  const { mode } = useSelectors();
  const theme = useModalMode(mode);

  return (
    <ConfigProvider theme={{ token: theme }}>
      <Modal {...props} />
    </ConfigProvider>
  );
};

export { UiModal };
