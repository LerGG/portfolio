import styled from "styled-components";
import { theme } from "../../theme/theme";

export const StyledCharSpacing = styled.span`
  padding-left: 0.25rem;
  padding-right: 0.25rem;
  @media only screen and (min-width: ${theme.breakpoints.sm}) {
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;
