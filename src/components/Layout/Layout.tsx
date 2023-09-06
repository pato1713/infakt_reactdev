import React from "react";
import { styled } from "styled-components";
import Header from "../Header/Header";

const StyledLayout = styled.div``;

const Layout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <StyledLayout>
      <Header />
      {children}
    </StyledLayout>
  );
};

export default Layout;
