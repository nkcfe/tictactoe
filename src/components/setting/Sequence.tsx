import React, { useCallback, useEffect } from "react";
import Flex from "../share/Flex";
import styled from "styled-components";
import Camp from "./Camp";
import useGameSetStore from "../../store/gameSetStore";
import MotionButton from "../share/Button";
import { useNavigate } from "react-router-dom";
import BackButton from "../share/BackButton";

interface SequenceProps {
  handleNextIndex: () => void;
  handlePrevIndex: () => void;
}

const Sequence = (props: SequenceProps) => {
  const { handlePrevIndex } = props;
  const { player1, player2, setFirstPlayer } = useGameSetStore();

  const navigate = useNavigate();

  const getRandom = useCallback(() => {
    let random = Math.floor(Math.random() * 2);
    if (random === 0) {
      setFirstPlayer(player1);
    } else {
      setFirstPlayer(player2);
    }
  }, [player1, player2, setFirstPlayer]);

  const goToPlay = () => {
    navigate("/play");
  };

  useEffect(() => {
    getRandom();
  }, [getRandom]);

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

      <CenterFlex style={{ gap: "5px", width: "99%", height: "370px" }}>
        <Camp player={player1} />
        <Camp player={player2} />
      </CenterFlex>
      <MotionButton onClick={getRandom} text="random" />
      <MotionButton
        onClick={goToPlay}
        text="Play!"
        color="secondary"
        size="medium"
      />
    </CenterFlex>
  );
};

export default Sequence;

const CenterFlex = styled(Flex)`
  justify-content: center;
  align-items: center;
`;

const Title = styled.div`
  font-size: 1.25rem;
  color: #4a485d;
  font-weight: bold;
`;
