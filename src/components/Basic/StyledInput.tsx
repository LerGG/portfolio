import styled from "styled-components";
import { theme } from "../../theme/theme";

export const StyledInput = styled.input`
  border: none;
  outline: none;
  -webkit-box-shadow: none;
  -moz-box-shadow: none;
  box-shadow: none;
  background-color: ${theme.backgrounds.forms};
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  padding-left: 0.25rem;
  padding-right: 0.25rem;
  margin: 0;
  color: white;
  font-size: 16px;
  border: 1px solid transparent;
  &:focus {
    border: 1px solid ${theme.colors.primary};
  }
`;
