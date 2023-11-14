import React from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import notFound from "../../../assets/images/404.svg";
import {UiButton} from "../../ui/button/UiButton";
import style from "./NotFound.module.scss";

const NotFound: React.FC = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  return (
    <div className={style.notFound}>
      <img src={notFound} alt="404 not found" className={style.none} />
      <div className={style.content}>
        <h2>404</h2>
        <p>{t("notFound")}</p>
        <UiButton onClick={() => navigate("/")}>{t("back")}</UiButton>
      </div>
    </div>
  );
};

export default NotFound;
