import React from "react";
import { ContentContainer } from "../Basic/ContentContainer";
import { Spacer } from "../Basic/Spacer";
import { StyledText } from "../Basic/StyledText";
import { gotham_light } from "../../fonts/gotham_light";
import { StyledLink } from "../Basic/StyledLink";
import { StyledSectionBottomSpacerShort } from "../Basic/StyledSectionBottomSpacerShort";
import { PageContainer } from "../Basic/PageContainer";
import { useTranslation } from "react-i18next";
import { NavBarLanguage } from "../navBar/NavBarLanguage";

export const Footer = () => {
  const { t } = useTranslation();
  return (
    <PageContainer>
      <ContentContainer>
        <StyledSectionBottomSpacerShort />
        <StyledText size="16px" style={gotham_light.style}>
          <StyledLink href={"/"}>{t("footer.home")}</StyledLink>
          {" | "}
          <StyledLink href={"/imprint"}>{t("footer.imprint")}</StyledLink>
          {" | "}
          <StyledLink href={"/privacy"}>{t("footer.privacy")}</StyledLink>
          <NavBarLanguage />
        </StyledText>

        <br />
        <StyledText size="12px" style={gotham_light.style}>
          {t("footer.disclaimer")}
        </StyledText>
        <br />
        <StyledText size="16px" style={gotham_light.style}>
          © 2024 Timo Waszek
        </StyledText>

        <br />
        <Spacer space="2" />
      </ContentContainer>
    </PageContainer>
  );
};
