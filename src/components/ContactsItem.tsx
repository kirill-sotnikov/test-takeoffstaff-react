import styled from "styled-components";

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
  width: 40%;
`;

const ContactsItemDivPhone = styled.p`
  color: #000000;
`;

const ContactsItemDivIcon = styled.img`
  margin-right: 21px;
  cursor: pointer;
`;

const UnderLine = styled.div`
  border: 0.5px solid black;
  width: 35%;
  border-radius: 37px;
  margin-top: 13px;
`;

export default function ContactsItem() {
  return (
    <>
      <UnderLine />
      <ContactsItemDiv>
        <ContactsItemDivName>Valeriy Sotnikov Sergeevich</ContactsItemDivName>
        <ContactsItemDivPhone>8 917 878 99 00</ContactsItemDivPhone>
        <div>
          <ContactsItemDivIcon
            src="img/changeICON.svg"
            onClick={() => console.log("Click change")}
          />
          <ContactsItemDivIcon
            src="img/deleteICON.svg"
            onClick={() => console.log("Click delte")}
          />
        </div>
      </ContactsItemDiv>
    </>
  );
}
