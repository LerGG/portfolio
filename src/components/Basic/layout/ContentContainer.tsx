import styled from "styled-components";
import { theme } from "../../../theme/theme";

export const ContentContainer = styled.div`
  position: relative;
  max-width: 100%;
  margin: 0;
  height: 100%;
  @media (min-width: ${theme.breakpoints.sm}) {
    max-width: ${theme.breakpoints.lg};
    margin: auto;
    padding-left: 0rem;
    padding-right: 0rem;
  }
`;
