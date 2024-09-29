import styled from "styled-components";
import { theme } from "../../theme/theme";

export const StyledTextArea = styled.textarea`
  overflow: auto;
  outline: none;
  -webkit-box-shadow: none;
  -moz-box-shadow: none;
  box-shadow: none;
  background-color: ${theme.backgrounds.forms};
  resize: none;
  color: white;
  width: 100%;
  padding: 0;
  font-size: 16px;
  border: 1px solid transparent;
  display: flex;
  &:focus {
    border: 1px solid ${theme.colors.primary};
  }
  height: 100%;
`;
