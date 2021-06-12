import { useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { addOrderDetails } from "../common/pokemonStorage";

const SubmitButton = styled.button`
  grid-column-start: first;
  grid-column-end: second;
  grid-row-start: r6;
  grid-row-end: r6;
  font-family: inherit;
  font-size: 100%;
  line-height: 1.15;
  font-weight: 700;
  margin: 14px 14px 14px 14px;
  background-color: black;
  color: white;
  outline: none;
  display: inline-flex;
  justify-content: center;
  border: 0;
  cursor: pointer;
  padding: 24px 0;

  align-self: end;
  &:hover {
    opacity: 0.8;
  }
`;
const LayoutStyle = styled.div`
  display: grid;
  grid-template-columns: [first] 50% [second] 50%;
  grid-template-rows: [r1] 65px [r2] 65px [r3] 65px [r4] 65px [r5] 65px [r6] 80px;
  max-width: 800px;
  margin: auto;
`;

const PanelStyle1 = styled.div`
  grid-column-start: first;
  grid-column-end: second;
  grid-row-start: r1;
  grid-row-end: r1;
  margin-right: 12px;
  margin-left: 12px;
  margin-top: 0;
  margin-bottom: 0;
  background-color: white;
`;

const PanelStyle2 = styled.div`
  grid-column-start: first;
  grid-column-end: first;
  grid-row-start: r2;
  grid-row-end: r2;
  margin-right: 12px;
  margin-left: 12px;
  margin-top: 0;
  margin-bottom: 0;
  background-color: white;
`;

const PanelStyle3 = styled.div`
  grid-column-start: second;
  grid-column-end: second;
  grid-row-start: r2;
  grid-row-end: r2;
  margin-right: 12px;
  margin-left: 12px;
  margin-top: 0;
  margin-bottom: 0;
  background-color: white;
`;

const PanelStyle4 = styled.div`
  grid-column-start: first;
  grid-column-end: second;
  grid-row-start: r3;
  grid-row-end: r3;
  margin-right: 12px;
  margin-left: 12px;
  margin-top: 0;
  margin-bottom: 0;
  background-color: white;
`;

const PanelStyle5 = styled.div`
  grid-column-start: first;
  grid-column-end: second;
  grid-row-start: r4;
  grid-row-end: r4;
  margin-right: 12px;
  margin-left: 12px;
  margin-top: 0;
  margin-bottom: 0;
  background-color: white;
`;

const PanelStyle6 = styled.div`
  grid-column-start: first;
  grid-column-end: second;
  grid-row-start: r5;
  grid-row-end: r5;
  margin-right: 12px;
  margin-left: 12px;
  margin-top: 0;
  margin-bottom: 0;
  background-color: white;
`;

const Input = styled.input`
  width: 100%;
  font-family: "Source Sans Pro", sans-serif;
  padding: 8px 8px;
  margin: 5px auto 5px auto;
  display: block;
  text-align: center;
  font-size: 18px;
  color: black;
  font-weight: 300;
`;

export function CheckOut() {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: "",
    address: "",
    creditcard: "",
  });
  const history = useHistory();
  const handleSubmit = () => {
    addOrderDetails({
      fName: contact.fName,
      lName: contact.lName,
      email: contact.email,
      address: contact.address,
      creditcard: contact.creditcard,
    });
    history.push(`/order-completed`);
  };

  function handleChange(event) {
    const { name, value } = event.target;

    setContact((prevValue) => {
      if (name === "fName") {
        return {
          fName: value,
          lName: prevValue.lName,
          email: prevValue.email,
          address: prevValue.address,
          creditcard: prevValue.creditcard,
        };
      }
      if (name === "lName") {
        return {
          fName: prevValue.fName,
          lName: value,
          email: prevValue.email,
          address: prevValue.address,
          creditcard: prevValue.creditcard,
        };
      }
      if (name === "email") {
        return {
          fName: prevValue.fName,
          lName: prevValue.lName,
          email: value,
          address: prevValue.address,
          creditcard: prevValue.creditcard,
        };
      }
      if (name === "address") {
        return {
          fName: prevValue.fName,
          lName: prevValue.lName,
          email: prevValue.email,
          address: value,
          creditcard: prevValue.creditcard,
        };
      }
      if (name === "creditcard") {
        return {
          fName: prevValue.fName,
          lName: prevValue.lName,
          email: prevValue.email,
          address: prevValue.address,
          creditcard: value,
        };
      }
      return "";
    });
  }

  return (
    <LayoutStyle>
      <PanelStyle1>
        <h1>
          Hello {contact.fName} {contact.lName}
        </h1>
        <p>{contact.email}</p>
      </PanelStyle1>
      <PanelStyle2>
        <Input
          onChange={handleChange}
          value={contact.fName}
          name="fName"
          placeholder="First Name"
        />
      </PanelStyle2>
      <PanelStyle3>
        <Input
          onChange={handleChange}
          value={contact.lName}
          name="lName"
          placeholder="Last Name"
        />
      </PanelStyle3>
      <PanelStyle4>
        <Input
          onChange={handleChange}
          value={contact.email}
          name="email"
          placeholder="Email"
        />
      </PanelStyle4>
      <PanelStyle5>
        <Input
          onChange={handleChange}
          value={contact.creditcard}
          name="creditcard"
          placeholder="Credit Card"
        />
      </PanelStyle5>
      <PanelStyle6>
        <Input
          onChange={handleChange}
          value={contact.address}
          name="address"
          placeholder="Address"
        />
      </PanelStyle6>

      <SubmitButton onClick={handleSubmit}>Submit</SubmitButton>
    </LayoutStyle>
  );
}
