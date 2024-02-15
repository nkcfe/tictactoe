import React from "react";
import Square from "./Square";
import styled from "styled-components";
import useGameSetStore from "../../store/gameSetStore";
import Flex from "../share/Flex";
import Marker from "../setting/Marker";

import { calculateWinner } from "../../utils/calculateWinner";

interface BoardProps {
  isFirstTurn: boolean;
  squares: any[];
  onPlay: (nextSquares: string[]) => void;
}

const Board = (props: BoardProps) => {
  const { isFirstTurn, squares, onPlay } = props;
  const { boardSize, firstPlayer, secondPlayer } = useGameSetStore();

  function handleClick(i: number) {
    if (calculateWinner(boardSize, squares) || squares[i]) {
      return;
    }
    const nextSquares = squares.slice();
    if (isFirstTurn) {
      nextSquares[i] = <Marker player={firstPlayer} />;
    } else {
      nextSquares[i] = <Marker player={secondPlayer} />;
    }
    onPlay(nextSquares);
  }

  const winner = calculateWinner(boardSize, squares);
  let status;
  if (winner) {
    status = "Winner: " + winner.props?.player.name;
  } else {
    status = "Next player: " + (isFirstTurn ? "X" : "O");
  }
  return (
    <Flex justify="center" align="center">
      <GridContainer $gridNumber={boardSize}>
        {Array.from({ length: boardSize ** 2 }).map((_, index) => (
          <Square
            value={squares[index]}
            onSquareClick={() => handleClick(index)}
            boardSize={boardSize}
          />
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
