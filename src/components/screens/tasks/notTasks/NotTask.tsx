import React from "react";
import { useTranslation } from "react-i18next";
import none from "../../../../assets/images/none.svg";
import style from "./NotTask.module.scss";

const NotTask: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className={style.notTask}>
      <img src={none} alt="notTask" className={style.none} />
      <div className={style.content}>
        <h2>{t("notTask")}</h2>
      </div>
    </div>
  );
};

export default NotTask;
