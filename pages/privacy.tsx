import { ContentContainer } from "../src/components/Basic/ContentContainer";
import React from "react";
import { StyledHeadline1 } from "../src/components/Basic/StyledHeadline1";
import { Spacer } from "../src/components/Basic/Spacer";

export default function Privacy() {
  return (
    <ContentContainer>
      <Spacer space="4" />
      <StyledHeadline1>Privacy Policy</StyledHeadline1>
    </ContentContainer>
  );
}
