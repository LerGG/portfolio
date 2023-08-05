import { gotham_book } from "../../fonts/gotham_book";
import { gotham_light } from "../../fonts/gotham_light";
import { ContentContainer } from "../Basic/ContentContainer";
import { StyledButton } from "../Basic/StyledButton";
import HeroImage from "./HeroImage";
import { SkillList } from "./HeroSkillList";
import {
  FullWidthHeroSectionWrapper,
  HeroButtonWrapper,
  HeroContenContainer,
  HeroHeadline,
  HeroSubHeadline,
  SkillsWrapper,
  StyledHeroHeadlineWrapper,
} from "./heroSection.styles";
import React from "react";

export default function HeroSection() {
  return (
    <FullWidthHeroSectionWrapper>
      <HeroImage />
      <ContentContainer style={{ zIndex: 100 }}>
        <HeroContenContainer>
          {/**space between placeholder */}
          <div></div>
          <StyledHeroHeadlineWrapper>
            <HeroHeadline style={gotham_book.style}>
              Multidisciplinary Software Engineer with a focus on Frontend &
              Usability
            </HeroHeadline>
            <HeroSubHeadline size="32px" style={gotham_light.style}>
              B.Sc. Informatics
            </HeroSubHeadline>
            <HeroButtonWrapper>
              <StyledButton>test</StyledButton>
            </HeroButtonWrapper>
          </StyledHeroHeadlineWrapper>
          <SkillsWrapper>
            <SkillList />
          </SkillsWrapper>
        </HeroContenContainer>
      </ContentContainer>
    </FullWidthHeroSectionWrapper>
  );
}
