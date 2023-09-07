import React from "react";
import { styled } from "styled-components";
import logo from "../../assets/logo.svg";

const StyledHeader = styled.header`
  display: flex;
  position: sticky;
  margin: 48px;
  justify-content: center;
  > div {
    width: 100%;
    max-width: 1432px;
  }
`;

const StyledLogoImg = styled.img`
  height: 38px;
`;

const Header = () => {
  return (
    <StyledHeader>
      <div>
        <StyledLogoImg src={logo}></StyledLogoImg>
      </div>
    </StyledHeader>
  );
};

export default Header;
