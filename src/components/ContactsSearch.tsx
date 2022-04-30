import { useEffect, useState } from "react";
import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { changeSearch } from "../store/SliceSearch";

const DivInput = styled.input`
  height: 27px;
  align-self: flex-start;
  margin-left: 3%;
  border-radius: 12px;
  border: 0.5px solid #151816;
  width: 54%;
  padding-left: 10px;
  font-size: 16px;
`;

//background-image: url("img/loupe.svg");
// background-repeat: no-repeat;
// background-position: right;

const DivImg = styled.img`
  align-self: flext-end;
`;

export default function ContactsSearch() {
  const [search, setSearch] = useState("");
  const data = useAppSelector((state) => state.search.value);
  const dispatch = useAppDispatch();

  useEffect(() => {
    console.log(data);
  });

  return (
    <DivInput
      placeholder="Search by name or tel '89178801112'"
      onChange={(e) => dispatch(changeSearch(e.target.value))}
    />
    // <ContactsSearchDiv>
    //   {/* <DivImg src="img/loupe.svg" /> */}
    // </ContactsSearchDiv>
  );
}
