import React from "react";
import styled from "styled-components";
import Board from "../share/Board";

const Logo = () => {
  return (
    <Base>
      <Board gridNumber={3} size="small" />
    </Base>
  );
};

export default Logo;

const Base = styled.div``;
