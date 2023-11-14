import React from "react";
import { useTranslation } from "react-i18next";
import { useActions, useDebounce, useResponsive } from "../../../../hooks";
import { UiInput } from "../../../ui/input/UiInput";
import { ImSearch } from "react-icons/im";

const HeaderSearch: React.FC = () => {
  const [inputValue, setInputValue] = React.useState<string>("");
  const { t } = useTranslation();
  const { setSearchValue } = useActions();
  const debouncedValue = useDebounce(inputValue, 200);

  const { isMobile } = useResponsive(1200);

  const handleChangeInput: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setInputValue(e.target.value);
  };

  React.useEffect(() => {
    setSearchValue(debouncedValue);
  }, [debouncedValue, setSearchValue]);

  return (
    <UiInput
      value={inputValue}
      onChange={handleChangeInput}
      placeholder={t("placeholderSearch")}
      style={{ width: isMobile ? "100%" : "300px" }}
      suffix={<ImSearch color="#94A3B8" size={18} />}
      size="large"
    />
  );
};

export default HeaderSearch;
