import styled from "styled-components";
import Link from "next/link";

export const StyledLink = styled(Link)`
  margin: 0;
  padding: 0;
  text-decoration: none;
  color: #ffffff;
  &:hover {
    text-decoration: underline;
  }
`;
