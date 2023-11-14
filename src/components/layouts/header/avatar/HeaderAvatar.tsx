import React from "react";
import { useActions } from "../../../../hooks/useActions/useActions";
import { Avatar } from "antd";
import { FaUserAlt } from "react-icons/fa";

const HeaderAvatar: React.FC = () => {
  const { toggleDrawerInfo } = useActions();
  return (
    <Avatar
      size={35}
      icon={<FaUserAlt />}
      style={{ cursor: "pointer" }}
      onClick={() => toggleDrawerInfo()}
    />
  );
};

export default HeaderAvatar;
