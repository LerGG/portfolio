import styled from "styled-components";

interface StyledFlexBoxProps {
  $direction?: "column" | "row";
  $height?: "auto";
}

/**
 * @$direction {"column" | "row"} default column
 * @$height {"auto"} default 100%
 */
export const StyledFlexBox = styled.div<StyledFlexBoxProps>`
  display: flex;
  width: 100%;
  flex-direction: ${(props) => props.$direction ?? "column"};
  height: ${(props) => props.$height ?? "100%"};
`;
