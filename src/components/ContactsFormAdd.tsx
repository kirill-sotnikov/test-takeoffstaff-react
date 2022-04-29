import { useEffect, useState } from "react";
import styled from "styled-components";

const ContactsFormAddDiv = styled.div`
  width: 100%;
  background-color: #f2afaf;
  border-radius: 12px;
  height: 62px;
  border: 0.5px solid #151816;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 13px;
`;

const ContactsFormAddDivName = styled.input`
  color: #000000;
  margin-left: 21px;
  width: 40%;
  background-color: rgba(0, 0, 0, 0);
  border: none;
  border-bottom: 1px solid black;
  outline: none;
  text-decoration: none;
  padding-bottom: 1px;
`;

const ContactsFormAddDivPhone = styled.input`
  color: #000000;
  background-color: rgba(0, 0, 0, 0);
  border: none;
  border-bottom: 1px solid black;
  outline: none;
  text-decoration: none;
  padding-bottom: 1px;
`;

const ContactsFormAddDivIcon = styled.img`
  margin-right: 21px;
  cursor: pointer;
  margin-top: 8px;
`;

export default function ContactsFormAdd() {
  const [name, setName] = useState<string>();
  const [phone, setPhone] = useState<string>();
  const [correctPhone, setCorrectPhone] = useState<string>();

  useEffect(() => {
    console.log(name);
    console.log(phone);
  });

  function createCorrectPhone() {
    if (phone) {
      let currentPhone = "";
      let index = 0;
      for (let i of phone) {
        switch (index) {
          case 1:
            currentPhone += " ";
            break;
          case 4:
            currentPhone += " ";
            break;
          case 7:
            currentPhone += " ";
            break;
          case 9:
            currentPhone += " ";
            break;
        }
        currentPhone += i;
        index++;
      }
      setCorrectPhone(currentPhone);
      console.log("Correct phone: ", currentPhone);
    }
  }

  useEffect(() => {
    createCorrectPhone();
  }, [phone]);

  return (
    <ContactsFormAddDiv>
      <ContactsFormAddDivName
        placeholder="Name"
        onChange={(e) => setName(e.target.value)}
      />
      <ContactsFormAddDivPhone
        placeholder="Phone: 89208007761"
        type="number"
        onChange={(e) => setPhone(e.target.value)}
      />
      <div>
        <ContactsFormAddDivIcon src="img/confirmICON.svg" />
        <ContactsFormAddDivIcon src="img/cancelICON.svg" />
      </div>
    </ContactsFormAddDiv>
  );
}
