import React, { ReactNode } from "react";
import styled from "styled-components";

interface SquareProps {
  value: string;
  onSquareClick: () => void;
  boardSize: number;
}

const Square = (props: SquareProps) => {
  const { value, onSquareClick, boardSize } = props;
  return (
    <GridItem className="square" onClick={onSquareClick} $boardSize={boardSize}>
      {value}
    </GridItem>
  );
};

export default Square;

const GridItem = styled.div<{ $boardSize: number }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: calc(400px / ${({ $boardSize }) => $boardSize});
  height: calc(400px / ${({ $boardSize }) => $boardSize});
  border: 1px solid #54463a;
`;
