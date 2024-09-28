import { ContentContainer } from "../src/components/Basic/ContentContainer";
import React from "react";
import { StyledHeadline1 } from "../src/components/Basic/StyledHeadline1";
import { Spacer } from "../src/components/Basic/Spacer";
import { StyledText } from "../src/components/Basic/StyledText";
import { StyledHeadline2 } from "../src/components/Basic/StyledHeadline2";
import { StyledSectionBottomSpacerShort } from "../src/components/Basic/StyledSectionBottomSpacerShort";
import { useTranslation } from "react-i18next";

export default function Imprint() {
  const { t } = useTranslation();
  return (
    <ContentContainer>
      <Spacer space="4" />
      <StyledHeadline1>{t("imprint.headline")}</StyledHeadline1>
      <Spacer space="4" />
      <StyledHeadline2>{t("imprint.responsiblePerson")}</StyledHeadline2>
      <Spacer space="1" />
      <StyledText size="16px">
        Timo Waszek <br />
        c/o IP-Management#24193 <br />
        Ludwig-Erhard-Str. 18 <br />
        20459 Hamburg <br />
        <br />
        {t("imprint.contact")}: timo [/ @ /] waszek.de
      </StyledText>
      <StyledSectionBottomSpacerShort />
      <StyledHeadline2>{t("imprint.linkLiability.headline")}</StyledHeadline2>
      <Spacer space="1" />
      <StyledText size="16px" textAlign="justify">
        {t("imprint.linkLiability.content")}
      </StyledText>
      <StyledSectionBottomSpacerShort />
      <StyledHeadline2>{t("imprint.copyright.headline")}</StyledHeadline2>
      <Spacer space="1" />
      <StyledText size="16px" textAlign="justify">
        {t("imprint.copyright.content")}
      </StyledText>
    </ContentContainer>
  );
}
