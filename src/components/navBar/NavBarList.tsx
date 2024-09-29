import { navbarItems } from "../../constants";
import { gotham_bold } from "../../fonts/gotham_bold";
import {
  StyledNavBarItemWrapper,
  StyledNavbarImgWrapper,
  StyledNavbarItem,
  StyledNavbarSpacing,
} from "./navBar.styles";
import { StyledLink } from "../Basic/StyledLink";
import Image from "next/image";

export const NavBarList = () => {
  // removes last delimiter
  return (
    <>
      {navbarItems.map((item, index) => {
        return (
          <StyledNavBarItemWrapper key={item.name}>
            <StyledNavbarImgWrapper>
              <Image width={15} height={15} src={item.imgUrl} alt="twitch" />
            </StyledNavbarImgWrapper>
            <StyledNavbarItem style={gotham_bold.style}>
              <StyledLink href={item.url}>{item.name}</StyledLink>
            </StyledNavbarItem>
            {!(navbarItems.length - 1 === index) && (
              <StyledNavbarSpacing style={gotham_bold.style}>
                /
              </StyledNavbarSpacing>
            )}
          </StyledNavBarItemWrapper>
        );
      })}
    </>
  );
};
