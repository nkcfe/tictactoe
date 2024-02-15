import React, { useState } from "react";
import Layout from "../components/share/Layout";
import Board from "../components/play/Board";
import useGameSetStore from "../store/gameSetStore";
import Flex from "../components/share/Flex";
import Side from "../components/play/Side";

const Play = () => {
  const { boardSize } = useGameSetStore();
  const [history, setHistory] = useState([Array(boardSize).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const isFirstTurn = currentMove % 2 === 0;
  const currentSquares = history[currentMove];

  const handlePlay = (nextSquares: string[]) => {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  };

  const backHandler = (nextMove: number) => {
    setCurrentMove(nextMove);
  };

  return (
    <Layout>
      <Flex direction="column" align="center" justify="center">
        <Flex>
          <Side />
          <Side />
        </Flex>
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
