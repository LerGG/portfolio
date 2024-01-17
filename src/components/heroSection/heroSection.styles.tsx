import styled from "styled-components";
import { FullWidthWrapper } from "../Basic/FullWidthWrapper";
import { StyledText } from "../Basic/StyledText";
import { StyledFlexBox } from "../Basic/StyledFlexBox";
import { theme } from "../../theme/theme";
import { StyledHeadline1 } from "../Basic/StyledHeadline1";

export const FullWidthHeroSectionWrapper = styled(FullWidthWrapper)`
  height: 80vh;
  width: 100vw;
  overflow: hidden;
  @media only screen and (min-width: ${theme.breakpoints.sm}) {
    height: 100vh;
  }
`;

export const HeroHeadline = styled(StyledHeadline1)`
  text-align: center;
  @media only screen and (min-width: ${theme.breakpoints.sm}) {
    text-align: left;
  }
`;

export const HeroSubHeadline = styled(StyledText)`
  padding-top: 3rem;
  text-align: center;
  width: 100%;
  font-size: 24px;
  @media only screen and (min-width: ${theme.breakpoints.sm}) {
    padding-top: 1.5rem;
    width: 80%;
    text-align: left;
    font-size: 32px;
  }
`;

export const HeroContenContainer = styled(StyledFlexBox)`
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
  @media only screen and (min-width: ${theme.breakpoints.sm}) {
    justify-content: space-between;
  }
`;

export const HeroButtonWrapper = styled.div`
  padding-top: 5rem;
  height: 10%;
  width: 100%;
  @media only screen and (min-width: ${theme.breakpoints.sm}) {
    width: auto;
  }
`;

export const SkillsWrapper = styled.div`
  padding-bottom: 2.5;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  row-gap: 1rem;
  @media only screen and (min-width: ${theme.breakpoints.sm}) {
    padding-bottom: 5rem;
    width: auto;
    justify-content: left;
    row-gap: 0;
  }
`;

export const StyledHeroHeadlineWrapper = styled.div`
  text-align: center;
  width: 100%;
  @media only screen and (min-width: ${theme.breakpoints.sm}) {
    width: 80%;
    text-align: left;
  }
`;
