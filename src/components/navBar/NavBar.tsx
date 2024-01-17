import { gotham_bold } from "../../fonts/gotham_bold";
import { NavBarList } from "./NavBarList";
import {
  StyledNavBarHeader,
  StyledNavBarListWrapper,
  StyledNavBarWrapper,
} from "./navBar.styles";
import React from "react";
import { StyledLink } from "../Basic/StyledLink";

export const NavBar = () => {
  return (
    <StyledNavBarWrapper>
      <StyledNavBarHeader style={gotham_bold.style}>
        <StyledLink href="/">{"Timo Waszek".toUpperCase()}</StyledLink>
      </StyledNavBarHeader>
      <div></div>
      <StyledNavBarListWrapper>
        <NavBarList />
      </StyledNavBarListWrapper>
    </StyledNavBarWrapper>
  );
};
