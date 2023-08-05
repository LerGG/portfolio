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
import React from "react";
import { useFormData } from "../../hooks/useFormData";
import { MailSectionButtonText } from "./MailSectionButtonText ";

export const MailSectionForm = () => {
  const [loading, handleSubmit, btnText] = useFormData("/api/contact");
  return (
    <MailSectionFlexBoxFormWrapper>
      <MailSectionFormWrapper>
        <MailSectionFormElement
          style={gotham_book.style}
          onSubmit={(event) => handleSubmit(event)}
        >
          <StyledLabelEmail style={gotham_medium.style}>
            E-Mail
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
              Name
              <StyledInput
                placeholder="Your Name"
                type="text"
                name="name"
                required
                autoComplete="given-name"
              />
            </StyledLabelName>
            <StyledLabelSurname style={gotham_medium.style}>
              Surname
              <StyledInput
                type="text"
                name="surname"
                placeholder="Your Surname"
                autoComplete="last-name"
                required
              />
            </StyledLabelSurname>
          </StyledNameSurnameWrapper>

          <MailSectionStyledTextArea
            placeholder="Type your message here"
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
