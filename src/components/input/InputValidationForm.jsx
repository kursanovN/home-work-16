import React from "react";
import styled from "styled-components";
import { useInput } from "../../hooks/useInputValid";

export const MyInput = () => {
  const email = useInput("", "email");
  const password = useInput("", "password");
  const date = useInput("", "date");

  const validate = {
    email: email.validate,
    password: password.validate,
    date: date.validate,
  };

  return (
    <Container>
      <InputBlock>
        <p> {email.error && <span>{email.error}</span>}</p>
        <input
          type="email"
          placeholder="Email"
          value={email.value}
          onChange={email.onChange}
          onBlur={validate.email}
        />
      </InputBlock>
      <InputBlock>
        <p>{email.error && <span>{password.error}</span>}</p>
        <input
          type="password"
          placeholder="Password"
          value={password.value}
          onChange={password.onChange}
          onBlur={validate.password}
        />
      </InputBlock>
      <InputBlock>
        <p> {email.error && <span>{date.error}</span>}</p>
        <input
          type="date"
          placeholder="Date"
          value={date.value}
          onChange={date.onChange}
          onBlur={validate.date}
        />
      </InputBlock>
    </Container>
  );
};

const Container = styled.div`
  width: 500px;
  height: 24 0px;
  display: grid;
  gap: 15px;
  border: 2px solid black;
  border-radius: 12px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  &:hover {
    border: 2px solid #fff;
    background-color: rgba(0, 0, 0, 0.4);
  }
`;

const InputBlock = styled.div`
  /* height: 20px; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* gap: 20px; */
  input {
    width: 400px;
    height: 30px;
    border-radius: 6px;
    border: none;
    &:hover {
      border-color: blue;
    }
    &:focus {
      border-color: blue;
    }
  }

  p {
    color: #b90808;
  }
`;
