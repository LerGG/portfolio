import { gotham_bold } from "../../fonts/gotham_bold";
import { NavBarList } from "./NavBarList";
import {
  StyledNavBarHeader,
  StyledNavBarListWrapper,
  StyledNavBarWrapper,
} from "./navBar.styles";
import React from "react";
import { StyledLink } from "../Basic/StyledLink";
import { NavBarLanguage } from "./NavBarLanguage";

export const NavBar = () => {
  return (
    <StyledNavBarWrapper>
      <StyledNavBarHeader style={gotham_bold.style}>
        <StyledLink href="/">{"Timo Waszek".toUpperCase()}</StyledLink>
      </StyledNavBarHeader>
      <NavBarLanguage />
      <StyledNavBarListWrapper>
        <NavBarList />
      </StyledNavBarListWrapper>
    </StyledNavBarWrapper>
  );
};
