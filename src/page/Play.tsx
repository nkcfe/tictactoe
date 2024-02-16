import React, { useState } from "react";
import Layout from "../components/share/Layout";
import Board from "../components/play/Board";
import useGameSetStore from "../store/gameSetStore";
import Flex from "../components/share/Flex";
import Side from "../components/play/Side";
import styled from "styled-components";

const Play = () => {
  const { firstPlayer, secondPlayer, boardSize } = useGameSetStore();
  const [history, setHistory] = useState([Array(boardSize).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const isFirstTurn = currentMove % 2 === 0;
  const isSecondTurn = currentMove % 2 !== 0;
  const currentSquares = history[currentMove];

  const handlePlay = (nextSquares: string[]) => {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  };

  const backHandler = () => {
    setCurrentMove((prev) => prev - 1);
  };

  return (
    <Layout>
      <Flex direction="column" align="center" justify="center">
        <SideWrapper>
          <Side
            backHandler={backHandler}
            player={firstPlayer}
            isMyTurn={isFirstTurn}
          />
          <Side
            backHandler={backHandler}
            player={secondPlayer}
            isMyTurn={isSecondTurn}
          />
        </SideWrapper>
        <Board
          isFirstTurn={isFirstTurn}
          squares={currentSquares}
          onPlay={handlePlay}
        />
      </Flex>
    </Layout>
  );
};

export default Play;

const SideWrapper = styled(Flex)`
  margin: 10px;
  width: 96%;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  padding: 10px;
  border: 2px solid #54463a;

  background-color: #f5f5f5;
  transition: 0.3s;
  &:hover {
    background-color: #e0e0e0;
  }
`;
