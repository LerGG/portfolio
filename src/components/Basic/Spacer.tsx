import styled from "styled-components";

export const Spacer = styled.div<{
  space?: string;
}>`
  margin-top: ${(props) => props.space + "rem" || "2rem"};
`;
