import { gotham_bold } from "../../fonts/gotham_bold";
import { NavBarList } from "./NavBarList";
import {
  StyledNavBarHeader,
  StyledNavBarListWrapper,
  StyledNavBarWrapper,
} from "./navBar.styles";
import React from "react";

export const NavBar = () => {
  return (
    <StyledNavBarWrapper>
      <StyledNavBarHeader style={gotham_bold.style}>
        {"Timo Waszek".toUpperCase()}
      </StyledNavBarHeader>
      <div></div>
      <StyledNavBarListWrapper>
        <NavBarList />
      </StyledNavBarListWrapper>
    </StyledNavBarWrapper>
  );
};
