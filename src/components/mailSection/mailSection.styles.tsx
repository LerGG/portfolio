import styled from "styled-components";
import { StyledHeadline2 } from "../Basic/StyledHeadline2";
import { theme } from "../../theme/theme";
import { StyledFlexBox } from "../Basic/StyledFlexBox";
import { StyledTextArea } from "../Basic/StyledTextArea";
import { StyledLabel } from "../Basic/StyledLabel";
import { StyledButton } from "../Basic/StyledButton";

export const StyledMailSectionHeadline = styled(StyledHeadline2)`
  width: 100%;
  font-size: 48px;
  @media (min-width: ${theme.breakpoints.sm}) {
    font-size: 60px;
  }
`;

export const MailSectionFlexBoxFormWrapper = styled(StyledFlexBox)`
  height: 100%;
  @media (min-width: ${theme.breakpoints.sm}) {
    width: 66%;
  }
`;

export const MailSectionFormWrapper = styled(StyledFlexBox)`
  height: 100%;
  width: 100%;
  flex-direction: column;
  align-items: center;
  padding: 0;
  margin: 0;
`;

export const MailSectionContentContainer = styled(StyledFlexBox)`
  height: 100%;
  flex-direction: column;
  row-gap: 2rem;
  align-items: center;
  @media (min-width: ${theme.breakpoints.sm}) {
    row-gap: 3rem;
  }
`;

export const MailSectionWrapper = styled(StyledFlexBox)`
  height: 80vh;
  @media only screen and (min-width: ${theme.breakpoints.sm}) {
    height: 60vh;
  }
`;

export const MailSectionFormElement = styled.form`
  display: flex;
  height: 100%;
  width: 100%;
  flex-direction: column;
  row-gap: 1rem;
  align-items: center;
`;
export const MailSectionStyledTextArea = styled(StyledTextArea)`
  width: 100%;
  overflow-x: hidden;
  flex-grow: 1;
`;

export const StyledLabelEmail = styled(StyledLabel)`
  width: 100%;
`;

export const StyledLabelName = styled(StyledLabel)`
  width: 100%;
`;

export const StyledLabelSurname = styled(StyledLabel)`
  width: 100%;
`;

export const StyledNameSurnameWrapper = styled(StyledFlexBox)`
  flex-direction: column;
  column-gap: 0;
  row-gap: 1rem;
  @media only screen and (min-width: ${theme.breakpoints.sm}) {
    flex-direction: row;
    column-gap: 1rem;
  }
`;

export const StyledSendMessageBtnWrapper = styled.div`
  width: 100%;
  @media only screen and (min-width: ${theme.breakpoints.sm}) {
    width: auto;
  }
`;

export const StyledMailSectionSendMsgBtn = styled(StyledButton)`
  width: 100%;
`;

export const StyledMailSectionButtonTextWrapper = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 1rem;
  justify-content: center;
  align-items: center;
`;
