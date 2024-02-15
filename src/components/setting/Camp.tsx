import React from "react";
import Flex from "../share/Flex";
import styled from "styled-components";
import Marker from "./Marker";
import useGameSetStore from "../../store/gameSetStore";
import type { playerType } from "../../module/player";

interface CampProps {
  player: playerType;
}

const Camp = (props: CampProps) => {
  const { player } = props;
  const { firstPlayer, setFirstPlayer, player1, player2, setSecondPlayer } =
    useGameSetStore();

  const handleChoice = () => {
    setFirstPlayer(player);
    setSecondPlayer(player === player1 ? player2 : player1);
  };

  return (
    <Wrapper justify="center" align="center" direction="column">
      <Marker player={player} size={100} />
      <Name>Player1</Name>
      <Select $isSelect={firstPlayer === player} onClick={handleChoice} />
    </Wrapper>
  );
};

export default Camp;

const Wrapper = styled(Flex)`
  width: 100%;
  height: 225px;
`;

const Name = styled.div`
  margin-top: 10px;
`;

const Select = styled.div<{ $isSelect: boolean }>`
  margin-top: 20px;
  width: 15px;
  height: 15px;
  border: 1px solid gray;
  border-radius: 100%;
  background-color: ${({ $isSelect }) => ($isSelect ? "#70a6f0" : "#fff")};
`;
