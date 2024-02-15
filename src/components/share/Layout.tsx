import React from "react";
import styled from "styled-components";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = (props: LayoutProps) => {
  const { children } = props;
  return (
    <Base>
      <Wrapper>{children}</Wrapper>
    </Base>
  );
};

export default Layout;

const Base = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`;

const Wrapper = styled.div`
  background-color: #F6F6F6;
  padding: 1rem;
  width: 450px;
  height: 800px;
`;
