import React, { useState } from "react";
import Board from "../share/Board";
import Flex from "../share/Flex";
import MotionButton from "../share/Button";
import styled from "styled-components";
import useGameSetStore from "../../store/gameSetStore";

const boardSizes = [3, 4, 5, 6, 7];

interface BoardSizeProps {
  handleNextIndex: () => void;
}

const BoardSize = (props: BoardSizeProps) => {
  const { handleNextIndex } = props;

  const { boardSize, setBoardSize } = useGameSetStore();

  const handleBoardSize = (size: number) => {
    setBoardSize(size);
  };

  return (
    <Flex
      style={{ width: "450px", gap: "30px" }}
      justify="center"
      align="center"
      direction="column"
    >
      <Title>Choose Board Size</Title>
      <Flex style={{ gap: "15px" }}>
        {boardSizes.map((size) => (
          <MotionButton
            key={size}
            onClick={() => handleBoardSize(size)}
            text={size.toString()}
          />
        ))}
      </Flex>
      <BoardWrapper>
        <Board size="small" gridNumber={boardSize} />
      </BoardWrapper>
      <MotionButton
        text="Continue"
        onClick={handleNextIndex}
        color="secondary"
      />
    </Flex>
  );
};

export default BoardSize;

const Title = styled.div`
  font-size: 1.25rem;
  color: #4a485d;
  font-weight: bold;
`;

const BoardWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 450px;
  height: 200px;
`;
