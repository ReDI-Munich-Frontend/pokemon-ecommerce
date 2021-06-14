import { useState } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

import { GRAY } from '../ShoppingCart/constants';
import { setUserData } from '../common/userDataStorage';

const LayoutStyle = styled.div`
  display: grid;
  grid-template-columns: 2fr;
  max-width: 660px;
  background-color: ${GRAY};
  margin: auto;
`;

const PanelStyle = styled.div`
  margin: 1rem;
  background-color: white;
  padding: 1rem;
`;

const Form = styled.form`
  display: grid;
  grid-gap: 12px;
  grid-template-columns: 600px;
`;

const PlaceOrderButton = styled.button`
  font-family: inherit;
  font-size: 100%;
  line-height: 1.15;
  font-weight: 700;
  margin: 24px 0 32px 0;
  width: 100%;
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

const Input = styled.input`
  font-size: 23px;
`;

const INITIAL_FORM = {
  name: '',
  address: '',
  creditCard: '',
};

export function Checkout() {
  const [formState, setFormState] = useState(INITIAL_FORM);
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    setUserData(formState);
    history.push('/order-completed');
  };

  const handleChange = (e) => {
    setFormState((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <LayoutStyle>
      <PanelStyle>
        <h2>Checkout form</h2>
        <Form onSubmit={(e) => handleSubmit(e)}>
          <Input name="name" value={formState.name} type="text" onChange={handleChange} />
          <Input name="address" value={formState.address} type="text" onChange={handleChange}/>
          <Input name="creditCard" value={formState.creditCard} type="number" onChange={handleChange}/>
          <PlaceOrderButton
            type="submit"
          >
            Place order
          </PlaceOrderButton>
        </Form>
      </PanelStyle>
    </LayoutStyle>
  );
}
