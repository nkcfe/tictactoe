import { motion } from "framer-motion";
import React from "react";
import { IconType } from "react-icons";
import styled, { css } from "styled-components";

interface ButtonProps {
  text?: string;
  onClick: () => void;
  icon?: IconType;
  size?: "small" | "medium" | "large";
  color?: "primary" | "secondary";
  rounded?: "rounded" | "full";
}

const MotionButton = (props: ButtonProps) => {
  const {
    text,
    onClick,
    icon: Icon,
    size = "medium",
    color = "primary",
    rounded = "rounded",
  } = props;
  return (
    <Base
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.9 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      onClick={onClick}
      $size={size}
      $color={color}
      $rounded={rounded}
    >
      {Icon && <Icon />}
      {text && <div>{text}</div>}
    </Base>
  );
};

export default MotionButton;

const Base = styled(motion.button)<{
  $size: string;
  $color: string;
  $rounded: string;
}>`
  display: flex;
  align-items: center;
  justify-content: center;

  border: none;

  cursor: pointer;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

  ${({ $size }) =>
    $size === "small" &&
    css`
      padding: 0.25rem 0.75rem;
      font-size: 1rem;
    `}
  ${({ $size }) =>
    $size === "medium" &&
    css`
      padding: 0.5rem 1.25rem;
      font-size: 1.25rem;
    `}
  ${({ $size }) =>
    $size === "large" &&
    css`
      width: 100%;
      padding: 1rem 1.5rem;
    `}

  ${({ $color }) =>
    $color === "primary" &&
    css`
      background-color: #4a485d;
      &:hover {
        background-color: #3e3c4f;
      }
      color: #fff;
    `}
  ${({ $color }) => $color === "secondary" && css`
      background-color: #fff;
      color: #4a485d;
      
  `}

  ${({ $rounded }) =>
    $rounded === "rounded" &&
    css`
      border-radius: 2rem;
    `}
  ${({ $rounded }) =>
    $rounded === "full" &&
    css`
      border-radius: 100%;
    `}

  transition: background-color 0.3s;
`;
