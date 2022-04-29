import styled from "styled-components";
import ContactsList from "../components/ContactsList";

const ContactsContainer = styled.div`
  display: block;
  width: 70%;
  max-width: 700px;
  margin: 0 auto;
  padding-top: 28px;
`;

const ContainerTitle = styled.h1`
  font-size: 18px;
  margin-left: 27px;
`;

export default function Contacts() {
  return (
    <ContactsContainer>
      <ContainerTitle>Contacts</ContainerTitle>
      <ContactsList />
    </ContactsContainer>
  );
}
