import React from "react";
import styled from "styled-components";
import Flex from "./share/Flex";

interface Props {
  children: React.ReactNode;
}

const Carousel = (props: Props) => {
  const { children } = props;
  return (
    <Base>
      <List>{children}</List>
    </Base>
  );
};

export default Carousel;

const Base = styled.div`
  height: 100%;
`;

const List = styled(Flex)`
  gap: 20px;
  list-style: none;

  width: calc(450px - 2rem);
  height: 100%;

  overflow: hidden;
`;
