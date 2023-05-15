import React from "react";
import styled from "styled-components";
import { useTimer } from "../../hooks/Timer";

export const Timer = () => {

  const { timer, startTimer, stopTimer, restartTimer, timers } =
    useTimer();

  return (
    <Container>
      <h1>{timer}</h1>
      <ContainerButton>
        {timers ? (
          <button onClick={timers ? stopTimer : startTimer}>stop</button>
        ) : (
          <button onClick={timers ? stopTimer : startTimer}>start</button>
        )}
        <button onClick={restartTimer}>
          Restart
        </button>
      </ContainerButton>
    </Container>
  );
};

const Container = styled.div`
  width: 500px;
  height: 180px;
  border: 2px solid black;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  &:hover {
    border: 2px solid #fff;
    background-color: rgba(0, 0, 0, 0.4);
  }

  h1 {
    color: #fff;
  }
`;
const ContainerButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
  button {
    width: 100px;
    height: 30px;
    background-color: rgba(0, 0, 0, 0.1);
    border: 2px dashed #fff;
    color: #fff;
    border-radius: 6px;
    &:hover {
      background: linear-gradient(
        294deg,
        rgba(253, 29, 29, 1) 12%,
        rgba(131, 58, 180, 1) 56%,
        rgba(252, 204, 69, 1) 100%
      );
      border: 2px solid #fff;
    }
  }
`;
