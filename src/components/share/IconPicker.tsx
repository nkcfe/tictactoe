import { motion } from "framer-motion";
import React from "react";
import { IconType } from "react-icons";
import styled, { css } from "styled-components";

interface ButtonProps {
  onClick: (item: string | number) => void;
  icon?: IconType;
  color?: string;
  disable?: boolean;
}

const ColorPicker = (props: ButtonProps) => {
  const { onClick, disable, icon: Icon, color = "white" } = props;

  const onClickHandler = (item: string | number) => {
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
      {Icon && <Icon />}
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
  height: 25px;
  border: none;
  border-radius: 100%;
  background-color: ${({ $color }) => $color};

  ${({ $disable }) =>
    $disable &&
    css`
      opacity: 0.5;
      cursor: not-allowed;
    `}
`;
