import styled from "styled-components";
import { theme } from "../../theme/theme";
import { TextAlignment } from "../../types/types";

export const StyledHeadline2 = styled.h2<{
  color?: string;
  textAlign?: TextAlignment;
}>`
  color: ${(props) => props.color || theme.colors.default};
  text-align: ${(props) => props.textAlign ?? "left"};
`;
