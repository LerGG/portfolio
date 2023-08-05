import styled from "styled-components";
import { theme } from "../../theme/theme";

export const StyledButton = styled.button`
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  background: none;
  color: inherit;
  border: 1px solid ${theme.border_colors.grey};
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
  padding-left: 2rem;
  padding-right: 2rem;
  transition: 0.2s ease-in;
  &:hover {
    border: 1px solid ${theme.colors.primary};
  }
`;
