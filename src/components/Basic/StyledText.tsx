import styled from "styled-components";
import { theme } from "../../theme/theme";
import { TextAlignment, TextSizes } from "../../types/types";

interface StyledTextProps {
  color?: string;
  textAlign?: TextAlignment;
  size?: TextSizes;
}

/**
 * @color {string}
 * @textAlign {"center" | "left" | "right" | "justify"} default left
 * @size {"14px" | "15px" | "16px" | "18px" | string} default 16px
 */
export const StyledText = styled.div<StyledTextProps>`
  color: ${(props) => props.color || theme.colors.default};
  text-align: ${(props) => props.textAlign ?? "left"};
  font-size: ${(props) => props.size ?? "16px"};
  line-height: 1.5;
`;
