import { createGlobalStyle } from "styled-components";
import {
  GlobalAppearAnimation,
  GlobalBody,
  GlobalHeadline1,
  GlobalHeadline2,
  GlobalSwiper,
} from "./styles/cssStyles";

export const GlobalStyle = createGlobalStyle`
  ${GlobalBody}
  ${GlobalHeadline1}
  ${GlobalHeadline2}
  ${GlobalSwiper}
  ${GlobalAppearAnimation}
`;
