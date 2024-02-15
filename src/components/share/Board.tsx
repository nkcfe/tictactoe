import React from "react";
import styled from "styled-components";
import Flex from "./Flex";

interface BoardProps {
  gridNumber: number;
  size: "small" | "large";
}

const Board = (props: BoardProps) => {
  const { gridNumber, size } = props;

  return (
    <Flex justify="center" align="center">
      <GridContainer $gridNumber={gridNumber}>
        {Array.from({ length: gridNumber ** 2 }).map((_, index) => (
          <GridItem key={index} $size={size} $gridNumber={gridNumber} />
        ))}
      </GridContainer>
    </Flex>
  );
};

export default Board;

const GridContainer = styled.div<{ $gridNumber: number }>`
  display: grid;
  grid-template-columns: ${({ $gridNumber }) => `repeat(${$gridNumber}, 1fr)`};
  border: 1px solid #54463a;
`;

const GridItem = styled.div<{ $size: string; $gridNumber: number }>`
  width: 25px;
  height: 25px;
  border: 1px solid #54463a;
`;
