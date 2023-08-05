import { BtnText } from "../../types/types";
import {
  StyledLoadSpinnerWrapper,
  StyledLoadSpinner,
} from "../Basic/StyledLoadSpinner";
import React from "react";

interface MailSectionButtonTextProps {
  loading: boolean;
  btnText: BtnText;
}

export const MailSectionButtonText = ({
  loading,
  btnText,
}: MailSectionButtonTextProps) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        columnGap: "1rem",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {loading && (
        <StyledLoadSpinnerWrapper>
          <StyledLoadSpinner>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </StyledLoadSpinner>
        </StyledLoadSpinnerWrapper>
      )}
      {btnText}
    </div>
  );
};
