import styled from "styled-components";
import Link from "next/link";
import { theme } from "../../theme/theme";

export const StyledLink = styled(Link)`
  text-decoration: underline solid #fff;
  transition: text-decoration 250ms ease-in-out;
  margin: 0;
  padding: 0;
  color: #ffffff;
  &:hover {
    text-decoration: underline solid ${theme.colors.primary};
  }
`;
