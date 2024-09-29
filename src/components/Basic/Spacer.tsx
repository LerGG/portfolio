import styled from "styled-components";

interface SpacerProps {
  $space?: string;
}

/**
 * @$space space in rem, should be a valid integter; default 2rem
 */
export const Spacer = styled.div<SpacerProps>`
  margin-top: ${(props) => props.$space + "rem" || "2rem"};
`;
