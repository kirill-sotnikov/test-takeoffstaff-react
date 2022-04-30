import styled from "styled-components";
import { useAppSelector } from "../store/hooks";
import ContactsButtonAdd from "./ContactsButtonAdd";
import ContactsFormAdd from "./ContactsFormAdd";
import ContactsItem from "./ContactsItem";
import ContactsSearch from "./ContactsSearch";
const ContactsDiv = styled.div`
  margin-top: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 630px;
`;

export default function ContactsList() {
  const contacts = useAppSelector((state) => state.contacts.value);
  const search = useAppSelector((state) => state.search.value);
  const suitableItems = contacts.filter((item) => {
    if (
      item.name.includes(search) ||
      item.phone.split(" ").join("").includes(search)
    ) {
      return true;
    }
  });
  return (
    <ContactsDiv>
      <ContactsSearch />
      <ContactsButtonAdd />
      <ContactsFormAdd />
      {search
        ? suitableItems.map((item) => <ContactsItem id={item.id} />)
        : contacts.map((item) => <ContactsItem id={item.id} />)}
    </ContactsDiv>
  );
}
