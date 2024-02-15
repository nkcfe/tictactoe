import React from "react";
import Layout from "../components/share/Layout";
import styled from "styled-components";
import Button from "../components/share/Button";
import { useNavigate } from "react-router-dom";
import Logo from "../components/home/Logo";
import MotionButton from "../components/share/Button";
import Flex from "../components/share/Flex";

const Home = () => {
  const navigate = useNavigate();

  const goToGame = () => {
    navigate("/setting");
  };

  const goToRecord = () => {
    navigate("/record");
  };

  return (
    <Layout>
      <Base direction="column" justify="center" align="center">
        <Logo />
        <Title>TIC TAC TOE</Title>
        <Flex style={{ gap: "15px" }} direction="column">
          <MotionButton text="New Game" onClick={goToGame} size="medium" />
          <MotionButton text="Load Game" onClick={goToRecord} size="medium" />
        </Flex>
      </Base>
    </Layout>
  );
};

export default Home;

const Base = styled(Flex)`
  width: 100%;
  height: 100%;
`;

const Title = styled.div`
  color: #4a485d;
  margin: 20px 0 40px 0;
`;
