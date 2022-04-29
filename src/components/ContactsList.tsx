import styled from "styled-components";
import ContactsButtonAdd from "./ContactsButtonAdd";
import ContactsFormAdd from "./ContactsFormAdd";
import ContactsItem from "./ContactsItem";
const ContactsDiv = styled.div`
  margin-top: 28px;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 630px;
`;

export default function ContactsList() {
  return (
    <ContactsDiv>
      <ContactsButtonAdd />
      <ContactsFormAdd />
      <ContactsItem />
      <ContactsItem />
      <ContactsItem />
    </ContactsDiv>
  );
}
