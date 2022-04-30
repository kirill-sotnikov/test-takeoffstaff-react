import { useState } from "react";
import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { deleteContact } from "../store/SliceContacts";
import ContactsFormChange from "./ContactsFormChange";

const ContactsItemDiv = styled.div`
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

const ContactsItemDivName = styled.p`
  color: #000000;
  margin-left: 21px;
  width: 39%;
  font-size: 18px;
`;

const ContactsItemDivPhone = styled.p`
  color: #000000;
  font-size: 18px;
  margin-right: 15%;
`;

const ContactsItemDivIcon = styled.img`
  margin-right: 21px;
  cursor: pointer;
`;

export default function ContactsItem({ id }: { id: string | number }) {
  const contact = useAppSelector(
    (state) => state.contacts.value.filter((item) => item.id === id)[0]
  );
  const dispatch = useAppDispatch();
  const [changeActive, setChangeActive] = useState<boolean>(false);

  if (changeActive) {
    return <ContactsFormChange id={id} setChangeActive={setChangeActive} />;
  }

  return (
    <>
      <ContactsItemDiv>
        <ContactsItemDivName>{contact.name}</ContactsItemDivName>
        <ContactsItemDivPhone>{contact.phone}</ContactsItemDivPhone>
        <div>
          <ContactsItemDivIcon
            src="img/changeICON.svg"
            onClick={() => setChangeActive(true)}
          />
          <ContactsItemDivIcon
            src="img/deleteICON.svg"
            onClick={() => dispatch(deleteContact(id))}
          />
        </div>
      </ContactsItemDiv>
    </>
  );
}
