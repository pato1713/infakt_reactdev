import React from "react";
import { styled } from "styled-components";

const StyledHeader = styled.header`
  display: flex;
  position: sticky;
  margin: 48px;
`;

const Header = () => {
  return <StyledHeader></StyledHeader>;
};

export default Header;
