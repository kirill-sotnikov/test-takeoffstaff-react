import React from "react";
import styled from "styled-components";
import LoginForm from "../components/LoginForm";

const LoginContainer = styled.div`
  margin-top: -100px;
  justify-content: center;
  display: flex;
  align-items: center;
  background-color: white;
  height: 100%;
  min-height: 100vh;
  flex-direction: column;
`;

const ContainerTitle = styled.h1`
  color: #2a322b;
  font-size: 36px;
`;

const ContainerImg = styled.img`
  margin-bottom: 60px;
`;

export default function Login() {
  return (
    <LoginContainer>
      <ContainerImg src="img/loginPIC.svg" width="100px" height="100px" />
      <ContainerTitle>Login</ContainerTitle>
      <LoginForm />
    </LoginContainer>
  );
}
