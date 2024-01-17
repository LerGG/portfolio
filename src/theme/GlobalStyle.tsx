import { createGlobalStyle } from "styled-components";
import {
  GlobalAppearAnimation,
  GlobalBody,
  GlobalHeadline1,
  GlobalHeadline2,
  GlobalLink,
  GlobalSwiper,
} from "./styles/cssStyles";

export const GlobalStyle = createGlobalStyle`
  ${GlobalBody}
  ${GlobalLink}
  ${GlobalHeadline1}
  ${GlobalHeadline2}
  ${GlobalSwiper}
  ${GlobalAppearAnimation}

`;
