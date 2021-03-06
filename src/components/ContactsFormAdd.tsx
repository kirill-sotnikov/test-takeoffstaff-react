import { useEffect, useState } from "react";
import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { addContact } from "../store/SliceContacts";
import { hide } from "../store/SliceShowHideFormAdd";
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
`;

const FormName = styled.input`
  color: #000000;
  margin-left: 21px;
  width: 33%;
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

const FormIconConfirm = styled.img`
  cursor: pointer;
  margin-top: 8px;
`;

const FormIconCancel = styled.img`
  margin-right: 21px;
  cursor: pointer;
  margin-top: 8px;
`;

const FormButtonConfirm = styled.button`
  margin-right: 21px;
  background-color: transparent;
  border: none;
`;

const UnderLine = styled.div`
  border: 0.5px solid black;
  width: 35%;
  border-radius: 37px;
  margin-top: 13px;
`;

// const ContactsFormAddDivForm

export default function ContactsFormAdd() {
  const [name, setName] = useState<string>();
  const [phone, setPhone] = useState<string>();
  const showStatus = useAppSelector((state) => state.showHideFormAdd.value);
  const dispatch = useAppDispatch();
  const [correctPhone, setCorrectPhone] = useState<string>();

  useEffect(() => {
    console.log(name);
    console.log(phone);
  });

  function createContact() {
    if (name && phone && correctPhone) {
      dispatch(
        addContact({
          name: name,
          phone: correctPhone,
          id: Date.now(),
        })
      );
      dispatch(hide());
      setName("");
      setPhone("");
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
  if (showStatus) {
    return (
      <>
        <ContactsFormAddDiv>
          <DivForm>
            <FormName
              placeholder="Name"
              onChange={(e) => setName(e.target.value)}
            />
            <FormPhone
              placeholder="Phone: 89208007761"
              type="number"
              onChange={(e) => setPhone(e.target.value)}
            />
            <div>
              <FormButtonConfirm
                type="submit"
                onClick={(e) => {
                  e.preventDefault();
                  createContact();
                }}
              >
                <FormIconConfirm src="img/confirmICON.svg" />
              </FormButtonConfirm>
              <FormIconCancel
                src="img/cancelICON.svg"
                onClick={() => dispatch(hide())}
              />
            </div>
          </DivForm>
        </ContactsFormAddDiv>
        <UnderLine />
      </>
    );
  }
  return null;
}
