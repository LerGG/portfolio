import { StyledHeadline1 } from "../src/components/Basic/StyledHeadline1";
import { Spacer } from "../src/components/Basic/Spacer";
import { ContentContainer } from "../src/components/Basic/layout/ContentContainer";
import { useTranslation } from "react-i18next";
import { PrivacyGeneral } from "../src/components/routes/privacy/PrivacyGeneral";
import { PrivacyHosting } from "../src/components/routes/privacy/PrivacyHosting";

export default function Privacy() {
  const { t } = useTranslation();
  return (
    <ContentContainer>
      <Spacer $space="4" />
      <StyledHeadline1>Datenschutzerklärung</StyledHeadline1>
      <Spacer $space="4" />
      <PrivacyGeneral />
      <Spacer $space="2" />
      <PrivacyHosting />
    </ContentContainer>
  );
}
