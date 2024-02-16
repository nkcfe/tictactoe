import React from "react";
import Flex from "../share/Flex";
import styled from "styled-components";
import BackButton from "../share/BackButton";
import MotionButton from "../share/Button";
import useGameSetStore from "../../store/gameSetStore";

const victoryCondition = [3, 5, 7];

interface VicConditionProps {
  handlePrevIndex: () => void;
  handleNextIndex: () => void;
}

const VicCondition = (props: VicConditionProps) => {
  const { handlePrevIndex, handleNextIndex } = props;
  const { victory, setVictory } = useGameSetStore();

  const handleVictory = (vic: number) => {
    setVictory(vic);
  };

  return (
    <Flex
      style={{ width: "450px", gap: "30px" }}
      justify="center"
      align="center"
      direction="column"
    >
      <CenterFlex
        style={{ width: "100%", padding: "10px", position: "relative" }}
      >
        <BackButton handlePrevIndex={handlePrevIndex} />
        <Title>Choose the winning conditions</Title>
      </CenterFlex>
      <Flex style={{ gap: "15px" }}>
        {victoryCondition.map((vic) => (
          <MotionButton
            key={vic}
            onClick={() => handleVictory(vic)}
            text={vic.toString()}
          />
        ))}
      </Flex>
      <Flex>
        <Title>Winning conditions: {victory}</Title>
      </Flex>
      <MotionButton
        text="Continue"
        onClick={handleNextIndex}
        color="secondary"
      />
    </Flex>
  );
};

export default VicCondition;

const CenterFlex = styled(Flex)`
  justify-content: center;
  align-items: center;
`;

const Title = styled.div`
  font-size: 1.25rem;
  color: #4a485d;
  font-weight: bold;
`;
