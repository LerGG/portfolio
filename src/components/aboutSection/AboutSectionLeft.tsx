import { gotham_book } from "../../fonts/gotham_book";
import { StyledText } from "../Basic/StyledText";
import { StyledFlexBoxAboutLeft } from "./aboutSection.styles";
import React from "react";

export const AboutSectionLeft = () => {
  return (
    <StyledFlexBoxAboutLeft>
      <StyledText style={gotham_book.style} size="28px">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </StyledText>
      <StyledText style={gotham_book.style} size="28px">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </StyledText>
    </StyledFlexBoxAboutLeft>
  );
};
