import { useTranslation } from "react-i18next";
import { gotham_light } from "../../fonts/gotham_light";
import { StyledLink } from "../Basic/StyledLink";
import { StyledText } from "../Basic/StyledText";

export const FooterRecaptcha = () => {
  const { t } = useTranslation();
  return (
    <>
      <StyledText size="12px" style={gotham_light.style}>
        {t("footer.reCaptcha.google")}&nbsp;
        <StyledLink href="https://policies.google.com/privacy">
          {t("footer.reCaptcha.privacyPolicy")}
        </StyledLink>
        &nbsp;{t("footer.reCaptcha.and")}&nbsp;
        <StyledLink href="https://policies.google.com/terms">
          {t("footer.reCaptcha.TOS")}
        </StyledLink>
        &nbsp;{t("footer.reCaptcha.apply")}
      </StyledText>
    </>
  );
};
