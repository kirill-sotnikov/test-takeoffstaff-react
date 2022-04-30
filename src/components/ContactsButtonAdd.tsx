import { useEffect } from "react";
import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { show } from "../store/SliceShowHideFormAdd";
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

const UnderLine = styled.div`
  border: 0.5px solid black;
  width: 35%;
  border-radius: 37px;
  margin-top: 13px;
`;

export default function ContactsButtonAdd() {
  const showStatus = useAppSelector((state) => state.showHideFormAdd.value);
  const dispatch = useAppDispatch();
  useEffect(() => {
    console.log("showStatus: ", showStatus);
  });

  if (!showStatus) {
    return (
      <>
        <ContactsButtonAddDiv onClick={() => dispatch(show())}>
          <ContactsButtonAddDivPlus>+</ContactsButtonAddDivPlus>
        </ContactsButtonAddDiv>
        <UnderLine />
      </>
    );
  }
  return null;
}
