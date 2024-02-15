import { motion } from "framer-motion";
import React from "react";
import { IconType } from "react-icons";
import styled, { css } from "styled-components";

interface ButtonProps {
  onClick: (item: string) => void;
  color?: string;
  disable?: boolean;
}

const ColorPicker = (props: ButtonProps) => {
  const { onClick, disable, color = "white" } = props;

  const onClickHandler = (item: string) => {
    if (disable) return;
    onClick(item);
  };

  return (
    <Base
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.9 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      onClick={() => onClickHandler(color)}
      $color={color}
      $disable={disable}
    >
      <Text>{disable && "사용중"}</Text>
    </Base>
  );
};

export default ColorPicker;

const Base = styled(motion.button)<{
  $color: string;
  $disable?: boolean;
}>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 25px;
  height: 60px;
  border: none;
  background-color: ${({ $color }) => $color};

  ${({ $disable }) =>
    $disable &&
    css`
      opacity: 0.5;
      cursor: not-allowed;
    `}

  &:first-child {
    border-radius: 10px 0 0 10px;
  }

  &:last-child {
    border-radius: 0 10px 10px 0;
  }
`;

const Text = styled.div`
  font-size: 0.75rem;
  font-weight: bold;
  color: #fff;
  line-height: -2;
`;
