import styled from "styled-components";
import { theme } from "../../theme/theme";

export const PageContainer = styled.div`
  max-width: 100%;
  margin-left: 1rem;
  margin-right: 1rem;
  @media (min-width: ${theme.breakpoints.sm}) {
    max-width: 1440px;
    margin: auto;
  }
`;
