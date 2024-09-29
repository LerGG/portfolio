import { StyledSectionBottomSpacerShort } from "../src/components/Basic/StyledSectionBottomSpacerShort";
import { StyledSectionSpacer } from "../src/components/Basic/StyledSectionSpacer";
import { StyledSectionTopSpacerShort } from "../src/components/Basic/StyledSectionTopSpacerShort";
import { ContentContainer } from "../src/components/Basic/layout/ContentContainer";
import { AboutSection } from "../src/components/aboutSection/AboutSection";

import HeroSection from "../src/components/heroSection/HeroSection";
import { MailSection } from "../src/components/mailSection/MailSection";
import { ProjectSection } from "../src/components/projectSection/ProjectSection";

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
    </ContentContainer>
  );
}
