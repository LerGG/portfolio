import React from "react";
import {
  MailSectionContentContainer,
  MailSectionWrapper,
  StyledMailSectionHeadline,
} from "./mailSection.styles";
import { gotham_bold } from "../../fonts/gotham_bold";
import { MailSectionForm } from "./MailSectionForm";

export const MailSection = () => {
  return (
    <MailSectionWrapper>
      <MailSectionContentContainer>
        <StyledMailSectionHeadline style={gotham_bold.style} textAlign="center">
          Get in Touch
        </StyledMailSectionHeadline>
        <MailSectionForm />
      </MailSectionContentContainer>
    </MailSectionWrapper>
  );
};
