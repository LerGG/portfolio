import styled from "styled-components";
import { theme } from "../../theme/theme";

export const StyledSectionSpacer = styled.div`
  height: 30vh;
  width: 100%;
  position: relative;

  :before {
    content: "";
    position: absolute;
    bottom: 50%;
    border-bottom: 2px ${theme.border_colors.grey} solid;
    width: 100%;
    z-index: 0;
    opacity: 0.2;
  }
`;
