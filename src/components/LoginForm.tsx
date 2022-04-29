import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

// import axios from "axios";

const LoginFormInput = styled.input`
  border-radius: 12px;
  border: 1px solid #151816;
  width: 40%;
  min-width: 200px;
  max-width: 250px;
  margin-top: 14px;
  height: 32px;
  padding-left: 9px;
  font-size: 18px;
  font-style: normal;
`;

const LoginFormButton = styled.button`
  border-radius: 12px;
  background-color: #0c100c;
  height: 32px;
  border: none;
  width: 98px;
  color: white;
  margin-top: 24px;
  cursor: pointer;
  font-size: 14px;
  font-weight: bold;
`;

const LoginFormForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LoginUserNotFound = styled.p`
  font-size: 14px;
  margin-top: 10px;
`;

export default function LoginForm() {
  const [login, setLogin] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [logined, setLogined] = useState<boolean>(false);
  const [notFounduser, setNotFoundUser] = useState<boolean>(false);

  useEffect(() => {
    if (login && password) {
      searchUser();
    }
  });

  async function searchUser() {
    const data = await axios.get(`http://localhost:3004/users?login=${login}`);
    const user = data.data[0];
    console.log(data.data);
    console.log(data.data.length);
    console.log("login: ", user.login);
    console.log("password: ", user.password);

    if (user && user.password === password) {
      setLogined(true);
    } else {
      setLogined(false);
    }
    console.log(logined);
  }

  return (
    <>
      <LoginFormForm
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <LoginFormInput
          placeholder="Username 'user'"
          type="text"
          value={login}
          onChange={(e) => setLogin(e.target.value)}
        />
        <LoginFormInput
          placeholder="Password 'user'"
          type="text"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {notFounduser ? (
          <LoginUserNotFound>User not found</LoginUserNotFound>
        ) : null}
        <LoginFormButton
          onClick={(e) => {
            if (logined) {
              document.location = "/contacts";
              setLogin("");
              setPassword("");
            } else {
              setNotFoundUser(true);
            }
          }}
          //     if (logined) {
          //       document.location = "/contacts";
          //     }
          //     console.log(logined);
          //   }
        >
          join
        </LoginFormButton>
      </LoginFormForm>
    </>
  );
}
