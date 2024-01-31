import styled from "styled-components";
import { FullWidthWrapper } from "../Basic/FullWidthWrapper";
import { theme } from "../../theme/theme";
import Image from "next/image";
import { ContentContainer } from "../Basic/ContentContainer";
import { StyledFlexBox } from "../Basic/StyledFlexBox";
import { StyledButton } from "../Basic/StyledButton";

export const FullWidthAboutSectionWrapper = styled(FullWidthWrapper)`
  display: flex;
  height: 100%;
  width: 100vw;
  overflow: hidden;
  flex-direction: column;
  @media only screen and (min-width: ${theme.breakpoints.sm}) {
    height: 90vh;
    align-items: center;
    justify-content: center;
  }
`;

export const StyledAboutBGImage = styled(Image)`
  opacity: 0.025;
`;

export const StyledContenContainerAbout = styled(ContentContainer)`
  z-index: 100;
  height: 100%;
  align-items: center;
  display: flex;
  padding-left: 1rem;
  padding-right: 1rem;
`;

export const StyledFlexBoxAboutWrapper = styled(StyledFlexBox)`
  width: 100%;
  height: 100%;
  flex-direction: column;
  row-gap: 2rem;
  @media only screen and (min-width: ${theme.breakpoints.sm}) {
    flex-direction: row;
    row-gap: 0rem;
    height: 60vh;
  }
`;

export const StyledFlexBoxAboutLeft = styled(StyledFlexBox)`
  width: 100%;
  height: 65%;
  flex-direction: column;
  row-gap: 2rem;
  @media only screen and (min-width: ${theme.breakpoints.sm}) {
    justify-content: space-between;
    row-gap: 0rem;
  }
`;

export const StyledAboutSectionRight = styled(StyledFlexBox)`
  height: 65%;
  flex-direction: column;
  justify-content: space-between;
`;

export const AboutSectionLayout = styled(StyledFlexBox)`
  flex-direction: column;
  height: 100%;
  justify-content: center;
  row-gap: 3rem;
  @media only screen and (min-width: ${theme.breakpoints.sm}) {
    row-gap: 0rem;
  }
`;

export const AboutButtonWrapper = styled.div`
  width: 100%;
`;

export const StyledAboutButton = styled(StyledButton)`
  width: 100%;
  @media only screen and (min-width: ${theme.breakpoints.sm}) {
    width: auto;
  }
`;
