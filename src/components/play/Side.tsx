import React from "react";
import Flex from "../share/Flex";
import MotionButton from "../share/Button";
import styled, { css } from "styled-components";
import type { playerType } from "../../module/player";

interface SideProps {
  backHandler: () => void;
  player: playerType;
  isMyTurn: boolean;
}

const Side = (props: SideProps) => {
  const { backHandler, player, isMyTurn } = props;

  return (
    <Base direction="column" $isMyTurn={isMyTurn}>
      <Title>{player.name}</Title>
      <MotionButton
        text={`무르기 ${player.leftCount}`}
        onClick={backHandler}
        size="small"
      />
    </Base>
  );
};

export default Side;

const Base = styled(Flex)<{ $isMyTurn: boolean }>`
  margin: 10px;
  padding: 10px;
  border: 1px solid #54463a;
  border-radius: 10px;
  background-color: #f5f5f5;
  width: 100px;
  height: 100px;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    background-color: #e0e0e0;
  }
  ${({ $isMyTurn }: { $isMyTurn: boolean }) =>
    $isMyTurn
      ? css`
          background-color: #6d4141;
          &:hover {
            background-color: #e0e0e0;
          }
        `
      : css`
          background-color: #f5f5f5;
          &:hover {
            background-color: #e0e0e0;
          }
        `}
`;

const Title = styled.div`
  font-size: 1.5rem;
`;
