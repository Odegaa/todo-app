import React from "react";
import Cookies from "js-cookie";
import { useTranslation } from "react-i18next";
import {UiSelect} from "../../../ui/select/UiSelect";

const HeaderLanguage: React.FC = () => {
  const { i18n } = useTranslation();
  const lang = Cookies.get("lang");
  const handleChangeLang = (value: string) => {
    i18n.changeLanguage(value);
    Cookies.set("lang", value);
  };

  return (
    <UiSelect
      defaultValue={lang || "RU"}
      onChange={handleChangeLang}
      options={[
        { value: "RU", label: "RU" },
        { value: "EN", label: "EN" },
        { value: "QQ", label: "QQ" },
      ]}
    />
  );
};

export default HeaderLanguage;
