import {
  StyledLoadSpinnerWrapper,
  StyledLoadSpinner,
} from "../Basic/StyledLoadSpinner";

import { StyledMailSectionButtonTextWrapper } from "./mailSection.styles";

interface MailSectionButtonTextProps {
  loading: boolean;
  btnText: string;
}

export const MailSectionButtonText = ({
  loading,
  btnText,
}: MailSectionButtonTextProps) => {
  return (
    <StyledMailSectionButtonTextWrapper>
      {loading && (
        <StyledLoadSpinnerWrapper>
          <StyledLoadSpinner>
            {/* Add Divs for Spinner */}
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
          </StyledLoadSpinner>
        </StyledLoadSpinnerWrapper>
      )}
      {btnText}
    </StyledMailSectionButtonTextWrapper>
  );
};
