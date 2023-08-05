import { ContentContainer } from "../src/components/Basic/ContentContainer";
import { StyledSectionBottomSpacerShort } from "../src/components/Basic/StyledSectionBottomSpacerShort";
import { StyledSectionSpacer } from "../src/components/Basic/StyledSectionSpacer";
import { StyledSectionTopSpacerShort } from "../src/components/Basic/StyledSectionTopSpacerShort";
import { AboutSection } from "../src/components/aboutSection/AboutSection";

import HeroSection from "../src/components/heroSection/HeroSection";
import { MailSection } from "../src/components/mailSection/MailSection";
import { ProjectSection } from "../src/components/projectSection/ProjectSection";
import React from "react";

export default function Home() {
  return (
    <ContentContainer>
      <HeroSection />
      <StyledSectionBottomSpacerShort />
      <AboutSection />
      <StyledSectionTopSpacerShort />
      <ProjectSection />
      <StyledSectionSpacer />
      <MailSection />
      <StyledSectionSpacer />
    </ContentContainer>
  );
}
