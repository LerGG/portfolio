import { useTranslation } from "react-i18next";
import {
  StyledNavbarLanguageText,
  StyledNavBarLanguageWrapper,
} from "./navBar.styles";
import { gotham_light } from "../../fonts/gotham_light";

export const NavBarLanguage = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === "en" ? "de" : "en";
    i18n.changeLanguage(newLang);
  };
  return (
    <StyledNavBarLanguageWrapper>
      <button onClick={() => toggleLanguage()}>
        <StyledNavbarLanguageText style={gotham_light.style}>
          {i18n.language === "en" ? "Deutsch" : "English"}
        </StyledNavbarLanguageText>
      </button>
    </StyledNavBarLanguageWrapper>
  );
};
