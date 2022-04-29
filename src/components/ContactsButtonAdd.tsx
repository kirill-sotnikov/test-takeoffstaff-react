import styled from "styled-components";

const ContactsButtonAddDiv = styled.div`
  width: 100%;
  background-color: #f2afaf;
  border-radius: 12px;
  height: 62px;
  border: 0.5px solid #151816;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 13px;
  cursor: pointer;
`;

const ContactsButtonAddDivPlus = styled.h1`
  font-weight: 200;
`;

export default function ContactsButtonAdd() {
  return (
    <ContactsButtonAddDiv>
      <ContactsButtonAddDivPlus>+</ContactsButtonAddDivPlus>
    </ContactsButtonAddDiv>
  );
}
