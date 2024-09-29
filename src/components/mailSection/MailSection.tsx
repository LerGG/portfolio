import {
  MailSectionContentContainer,
  MailSectionWrapper,
  StyledMailSectionHeadline,
} from "./mailSection.styles";
import { gotham_bold } from "../../fonts/gotham_bold";
import { MailSectionForm } from "./MailSectionForm";
import { useTranslation } from "react-i18next";

export const MailSection = () => {
  const { t } = useTranslation();
  return (
    <MailSectionWrapper id="mail-section">
      <MailSectionContentContainer $direction="column">
        <StyledMailSectionHeadline style={gotham_bold.style} textAlign="center">
          {t("mailSection.headline")}
        </StyledMailSectionHeadline>
        <MailSectionForm />
      </MailSectionContentContainer>
    </MailSectionWrapper>
  );
};
