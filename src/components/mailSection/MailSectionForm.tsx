import { gotham_book } from "../../fonts/gotham_book";
import { gotham_medium } from "../../fonts/gotham_medium";
import { StyledInput } from "../Basic/StyledInput";
import {
  MailSectionFlexBoxFormWrapper,
  MailSectionFormWrapper,
  StyledLabelEmail,
  StyledLabelName,
  StyledLabelSurname,
  MailSectionStyledTextArea,
  MailSectionFormElement,
  StyledNameSurnameWrapper,
  StyledSendMessageBtnWrapper,
  StyledMailSectionSendMsgBtn,
} from "./mailSection.styles";

import { useFormData } from "../../hooks/useFormData";

import { useTranslation } from "react-i18next";
import { MailSectionButtonText } from "./MailSectionButtonText";

export const MailSectionForm = () => {
  const [loading, handleSubmit, btnText] = useFormData("/api/contact");
  const { t } = useTranslation();
  return (
    <MailSectionFlexBoxFormWrapper>
      <MailSectionFormWrapper>
        <MailSectionFormElement
          style={gotham_book.style}
          onSubmit={(event) => handleSubmit(event)}
        >
          <StyledLabelEmail style={gotham_medium.style}>
            {t("mailSection.eMail")}
            <StyledInput
              required
              style={gotham_book.style}
              type="text"
              name="email"
              placeholder="example@provider.com"
              autoComplete="email"
              pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$"
            />
          </StyledLabelEmail>
          <StyledNameSurnameWrapper>
            <StyledLabelName style={gotham_medium.style}>
              {t("mailSection.name")}
              <StyledInput
                placeholder={t("mailSection.namePlaceholder")}
                type="text"
                name="name"
                required
                autoComplete="given-name"
              />
            </StyledLabelName>
            <StyledLabelSurname style={gotham_medium.style}>
              {t("mailSection.surName")}
              <StyledInput
                type="text"
                name="surname"
                placeholder={t("mailSection.surNamePlaceholder")}
                autoComplete="last-name"
                required
              />
            </StyledLabelSurname>
          </StyledNameSurnameWrapper>

          <MailSectionStyledTextArea
            placeholder={t("mailSection.placeholderText")}
            style={gotham_book.style}
            maxLength={2000}
            required
            name="message"
          />
          <StyledSendMessageBtnWrapper>
            <StyledMailSectionSendMsgBtn
              style={gotham_medium.style}
              type={"submit"}
            >
              <MailSectionButtonText loading={loading} btnText={btnText} />
            </StyledMailSectionSendMsgBtn>
          </StyledSendMessageBtnWrapper>
        </MailSectionFormElement>
      </MailSectionFormWrapper>
    </MailSectionFlexBoxFormWrapper>
  );
};
