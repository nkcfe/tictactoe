import React, { useEffect, useState } from "react";
import Flex from "../share/Flex";
import styled from "styled-components";
import MotionButton from "../share/Button";

import Choice from "./Choice";
import useGameSetStore from "../../store/gameSetStore";
import { motion } from "framer-motion";
import BackButton from "../share/BackButton";

interface PlayerProps {
  handleNextIndex: () => void;
  handlePrevIndex: () => void;
}

const Player = (props: PlayerProps) => {
  const { handleNextIndex, handlePrevIndex } = props;

  const [usingColor, setUsingColor] = useState(["#D04848", "#6895D2"]);

  const {
    player1,
    player2,
    setColorPlayer1,
    setColorPlayer2,
    setIconIndexPlayer1,
    setIconIndexPlayer2,
  } = useGameSetStore();

  useEffect(() => {
    setUsingColor([player1.color, player2.color]);
  }, [player1.color, player2.color]);

  return (
    <CenterFlex
      direction="column"
      style={{ width: "450px", height: "100%", gap: "30px" }}
    >
      <CenterFlex
        style={{ width: "100%", padding: "10px", position: "relative" }}
      >
        <BackButton handlePrevIndex={handlePrevIndex} />
        <Title>Pick Your Marker</Title>
      </CenterFlex>

      <Flex
        direction="column"
        style={{
          border: "3px solid #54463a",
          width: "100%",
          height: "450px",
        }}
      >
        <Flex
          style={{
            width: "100%",
            height: "100%",
          }}
        >
          <Choice
            usingColor={usingColor}
            player={player1}
            setPlayerColor={setColorPlayer1}
            setPlayerIcon={setIconIndexPlayer1}
          />
          <VerticalLine />
          <Choice
            usingColor={usingColor}
            player={player2}
            setPlayerColor={setColorPlayer2}
            setPlayerIcon={setIconIndexPlayer2}
          />
        </Flex>
      </Flex>
      <MotionButton
        text="Continue"
        onClick={handleNextIndex}
        color="secondary"
      />
    </CenterFlex>
  );
};

export default Player;

const CenterFlex = styled(Flex)`
  justify-content: center;
  align-items: center;
`;

const VerticalLine = styled.div`
  width: 2px;
  height: 100%;
  background-color: #54463a;
`;

const Title = styled.div`
  margin-top: 5px;
  font-size: 1.25rem;
  color: #4a485d;
  font-weight: bold;
`;
