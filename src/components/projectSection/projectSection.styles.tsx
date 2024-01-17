import styled from "styled-components";
import { StyledFlexBox } from "../Basic/StyledFlexBox";
import { theme } from "../../theme/theme";

export const ProjectSectionWrapper = styled(StyledFlexBox)`
  flex-direction: column;
  height: 80vh;
  @media only screen and (min-width: ${theme.breakpoints.sm}) {
    height: 60vh;
  }
`;

export const StyledProjectSlide = styled(StyledFlexBox)`
  position: relative;
  box-sizing: border-box;
  display: flex;
  transition: 0.2s ease-in;
  border: 1px solid ${theme.border_colors.grey};
  width: 100%;
  height: 80%;
  padding-top: 1rem;
  padding-bottom: 1rem;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  flex-direction: column;
  cursor: pointer;
  :hover {
    border-color: ${theme.colors.primary};
  }
`;

export const StyledSlideImg = styled.div`
  height: 80px;
  width: 250px;
`;

export const StyledSlideLocation = styled.div`
  position: absolute;
  bottom: 0px;
  padding-bottom: 1.5rem;
`;

export const StyledSlideTag = styled.div`
  position: absolute;
  top: 0px;
  right: 0px;
  padding-top: 1.5rem;
  padding-right: 1.5rem;
`;

export const StyledProjectSlideWrapper = styled(StyledFlexBox)`
  height: 100%;
  flex-direction: column;
  justify-content: center;
`;
