import React from "react";
import { useCounter } from "../../hooks/Counter";
import styled from "styled-components";

export const Count = () => {
  const { count,resetHandler, increment, decrement } = useCounter();
  return (
    <Container>
      <h1>{count}</h1>
      <ContainerButton>
        <button onClick={() => decrement(2)}>-</button>
        <button onClick={() => increment(4)}>+</button>
        <button onClick={() => resetHandler()}>reset</button>
      </ContainerButton>
    </Container>
  );
};

const Container = styled.div`
  width: 500px;
  height: 200px;
  color: white;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 2px solid #000;

  &:hover {
    border: 2px solid #fff;
    background-color: rgba(0, 0, 0, 0.4);
  }
`;
const ContainerButton = styled.div`
  display: flex;
  gap: 30px;
  margin-top: 20px;

  button {
    width: 60px;
    height: 60px;
    border-radius: 100%;
    background-color: rgba(0, 0, 0, 0.1);
    color: #fff;
    border: 2px dashed #fff;
    &:hover {
      border: 3px solid #fff;
    }
  }
`;
