import { StyledAbsoluteWrapper } from "../Basic/StyledAbsoluteWrapper";
import { AboutSectionLeft } from "./AboutSectionLeft";
import { AboutSectionRight } from "./AboutSectionRight";
import {
  AboutButtonWrapper,
  AboutSectionLayout,
  FullWidthAboutSectionWrapper,
  StyledAboutBGImage,
  StyledAboutButton,
  StyledContenContainerAbout,
  StyledFlexBoxAboutWrapper,
} from "./aboutSection.styles";

export const AboutSection = () => {
  return (
    <FullWidthAboutSectionWrapper>
      <StyledAbsoluteWrapper style={{ zIndex: 3 }}>
        <StyledAboutBGImage
          fill={true}
          src={"/img/worldmap-bg.png"}
          alt={"abstract dark baground"}
        />
      </StyledAbsoluteWrapper>
      <StyledContenContainerAbout>
        <AboutSectionLayout>
          <StyledFlexBoxAboutWrapper>
            <AboutSectionLeft />
            <AboutSectionRight />
          </StyledFlexBoxAboutWrapper>
          <AboutButtonWrapper>
            <StyledAboutButton>Connect on LinkedIn</StyledAboutButton>
          </AboutButtonWrapper>
        </AboutSectionLayout>
      </StyledContenContainerAbout>
    </FullWidthAboutSectionWrapper>
  );
};
