import { useTranslation } from "react-i18next";
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
import { scrollToSection } from "../../utils/scrollToSection";

export default function HeroSection() {
  const { t } = useTranslation();

  return (
    <FullWidthHeroSectionWrapper>
      <HeroImage />
      <ContentContainer style={{ zIndex: 100 }}>
        <HeroContenContainer>
          {/**space between placeholder */}
          <div></div>
          <StyledHeroHeadlineWrapper>
            <HeroHeadline style={gotham_book.style}>
              {t("hero.headline")}
            </HeroHeadline>
            <HeroSubHeadline size="32px" style={gotham_light.style}>
              {t("hero.title")}
            </HeroSubHeadline>
            <HeroButtonWrapper>
              <StyledButton onClick={() => scrollToSection("mail-section")}>
                {t("hero.buttonContact")}
              </StyledButton>
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
