import styled from "styled-components";
import { StyledCharSpacing } from "../Basic/StyledCharSpacing";
import { theme } from "../../theme/theme";
import { StyledText } from "../Basic/StyledText";

export const StyledNavBarWrapper = styled.div`
  height: 150px;
  width: 100%;
  background: ${({ theme }) => theme.backgrounds.default};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media only screen and (min-width: ${theme.breakpoints.sm}) {
    justify-content: space-between;
    align-items: flex-end;
    flex-direction: row;
    height: 100px;
  }
`;

export const StyledNavBarHeader = styled.div`
  display: flex;
  padding-left: 0;
  font-size: 28px;
  letter-spacing: -2px;
  width: 100%;
  justify-content: center;
  padding-bottom: 0.75rem;
  height: 50%;
  align-items: center;
  @media only screen and (min-width: ${theme.breakpoints.sm}) {
    height: 100%;
    font-size: 38px;
    padding-left: 5vw;
    justify-content: left;
    align-items: flex-end;
    padding-bottom: 0;
  }
`;

export const StyledNavbarItem = styled(StyledText)`
  color: #ffffff;
  font-size: 14px;
  height: 100%;
  align-items: center;
  display: flex;
  @media only screen and (min-width: ${theme.breakpoints.sm}) {
    font-size: 18px;
  }
`;

export const StyledNavbarSpacing = styled(StyledCharSpacing)`
  color: ${theme.colors.tertiary};
  font-size: 18px;
`;

export const StyledNavbarImgWrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding-right: 0.25rem;
  align-items: center;
  @media only screen and (min-width: ${theme.breakpoints.sm}) {
    padding-left: 0.5%;
  }
`;

export const StyledNavBarItemWrapper = styled.div`
  flex-direction: row;
  display: flex;
  padding-bottom: 0.25rem;
`;

export const StyledNavBarListWrapper = styled.div`
  padding-right: 0;
  display: flex;
  flex-direction: row;
  @media only screen and (min-width: ${theme.breakpoints.sm}) {
    padding-right: 5vw;
  }
`;
