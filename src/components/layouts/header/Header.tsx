import React from "react";

import { useTranslation } from "react-i18next";
import { useResponsive } from "../../../hooks/useResponsive/useResponsive";
import { todayDate } from "../../../utils/data/Date";

import style from "./Header.module.scss";
import HeaderHamburger from "./hamburger/HeaderHamburger";
import HeaderSearch from "./search/HeaderSearch";
import HeaderBadge from "./badge/HeaderBadge";
import HeaderLanguage from "./language/HeaderLanguage";
import HeaderAvatar from "./avatar/HeaderAvatar";

const Header: React.FC = () => {
  const { t } = useTranslation();
  const { isMobile } = useResponsive(1200);
  return (
    <header className={style.header}>
      <div className={style.headerInner}>
        {isMobile ? <HeaderHamburger /> : <HeaderSearch />}
        <div className={style.title}>
          {isMobile && <div>{t("title")}</div>}
          <p>{todayDate}</p>
        </div>
        <div className={style.block}>
          <HeaderBadge />
          <HeaderLanguage />
          {isMobile && <HeaderAvatar />}
        </div>
      </div>
      {isMobile && <HeaderSearch />}
    </header>
  );
};

export default Header;
