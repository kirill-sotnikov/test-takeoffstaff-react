import { useEffect, useState } from "react";
import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { changeContact } from "../store/SliceContacts";
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

const DivForm = styled.form`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 2px;
`;

const FormName = styled.input`
  color: #000000;
  margin-left: 21px;
  width: 40%;
  background-color: rgba(0, 0, 0, 0);
  border: none;
  border-bottom: 1px solid black;
  outline: none;
  text-decoration: none;
  padding-bottom: 1px;
  font-size: 18px;
`;

const FormPhone = styled.input`
  color: #000000;
  background-color: rgba(0, 0, 0, 0);
  border: none;
  border-bottom: 1px solid black;
  outline: none;
  text-decoration: none;
  padding-bottom: 1px;
  font-size: 18px;
`;

const FormIcon = styled.img`
  margin-right: 21px;
  cursor: pointer;
  margin-top: 8px;
`;

const FormButtonConfirm = styled.button`
  background-color: transparent;
  border: none;
`;

// const ContactsFormAddDivForm
interface propsType {
  id: number | string;
  setChangeActive: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function ContactsFormChange({ id, setChangeActive }: propsType) {
  const [name, setName] = useState<string>();
  const [phone, setPhone] = useState<string>();
  const contact = useAppSelector(
    (state) => state.contacts.value.filter((item) => item.id === id)[0]
  );
  const dispatch = useAppDispatch();
  const [correctPhone, setCorrectPhone] = useState<string>();

  useEffect(() => {
    console.log(name);
    console.log(phone);
  });
  useEffect(() => {
    setPhone(contact.phone.split(" ").join(""));
    setName(contact.name);
  }, []);

  function onChangeContact() {
    if (name && correctPhone && phone) {
      dispatch(changeContact({ name: name, phone: correctPhone, id: id }));
    }
  }

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

        setCorrectPhone(currentPhone);
        console.log("Correct phone: ", currentPhone);
      }
    }
  }

  useEffect(() => {
    createCorrectPhone();
  }, [phone]);

  return (
    <>
      <ContactsFormAddDiv>
        <DivForm>
          <FormName
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <FormPhone
            placeholder="Phone: 89208007761"
            type="number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <div>
            <FormButtonConfirm
              type="submit"
              onClick={() => {
                onChangeContact();
                setChangeActive(false);
              }}
            >
              <FormIcon src="img/confirmICON.svg" />
            </FormButtonConfirm>
            <FormIcon
              src="img/cancelICON.svg"
              onClick={() => setChangeActive(false)}
            />
          </div>
        </DivForm>
      </ContactsFormAddDiv>
    </>
  );
}
