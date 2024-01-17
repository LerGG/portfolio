import React from "react";
import { ContentContainer } from "../Basic/ContentContainer";
import { Spacer } from "../Basic/Spacer";
import { StyledText } from "../Basic/StyledText";
import { gotham_light } from "../../fonts/gotham_light";
import { StyledLink } from "../Basic/StyledLink";
import { StyledSectionBottomSpacerShort } from "../Basic/StyledSectionBottomSpacerShort";
import { PageContainer } from "../Basic/PageContainer";

export const Footer = () => {
  return (
    <PageContainer>
      <ContentContainer>
        <StyledSectionBottomSpacerShort />
        <StyledText size="16px" style={gotham_light.style}>
          <StyledLink href={"/"}>Start</StyledLink>
          {" | "}
          <StyledLink href={"/imprint"}>Imprint</StyledLink>
          {" | "}
          <StyledLink href={"/privacy"}>Privacy</StyledLink>
          <br></br>
          Images used are property to their respective companies
          <br />
          © 2024 Timo Waszek
          <br />
        </StyledText>
        <Spacer space="2" />
      </ContentContainer>
    </PageContainer>
  );
};
