import styled from "styled-components";
import { theme } from "../../theme/theme";
import { TextAlignment, TextSizes } from "../../types/types";

export const StyledText = styled.div<{
  color?: string;
  textAlign?: TextAlignment;
  size?: TextSizes;
}>`
  color: ${(props) => props.color || theme.colors.default};
  text-align: ${(props) => props.textAlign ?? "left"};
  font-size: ${(props) => props.size ?? "16px"};
`;
