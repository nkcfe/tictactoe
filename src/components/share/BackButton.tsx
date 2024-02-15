import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

import { MdOutlineKeyboardBackspace } from "react-icons/md";

interface BackButtonProps {
  handlePrevIndex: () => void;
}

const BackButton = (props: BackButtonProps) => {
  const { handlePrevIndex } = props;
  return (
    <Base
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.9 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      onClick={handlePrevIndex}
    >
      <MdOutlineKeyboardBackspace size={24} />
    </Base>
  );
};

export default BackButton;

const Base = styled(motion.button)`
  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  left: 0;

  border: none;
  background-color: transparent;

  color: #54463a;
  cursor: pointer;
`;
