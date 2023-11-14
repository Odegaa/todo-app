import React from "react";
import { BsMoonStarsFill } from "react-icons/bs";
import { MdSunny } from "react-icons/md";
import {UiSwitch} from "../../../../ui/switch/UiSwitch";
import { useSelectors, useActions } from "../../../../../hooks";

const DrawerInfoSwitch: React.FC = () => {
  const { mode } = useSelectors();
  const { toggleColorMode } = useActions();
  const onChangeMode = (checked: boolean) => {
    if (checked) toggleColorMode("dark");
    else toggleColorMode("light");
  };

  return (
    <UiSwitch
      checked={mode === "dark"}
      onChange={onChangeMode}
      checkedChildren={<BsMoonStarsFill color="#fff" />}
      unCheckedChildren={<MdSunny color="yellow" />}
    />
  );
};

export default DrawerInfoSwitch;
