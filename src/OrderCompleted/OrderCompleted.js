import styled from 'styled-components';
import { useState, useEffect } from "react";
import { useHistory } from 'react-router-dom';

import { GRAY } from '../ShoppingCart/constants';
import { Card } from "../ShoppingCart/components/Card";
import { getCartItems, clearCart } from "../common/pokemonStorage";
import { getUserData, clearUserData } from '../common/userDataStorage';

const LayoutStyle = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  max-width: 1024px;
  background-color: ${GRAY};
  margin: auto;
`;

const PanelStyle = styled.div`
  margin: 1rem;
  background-color: white;
  padding: 1rem;
`;

const ScrollStyle = styled.div`
  overflow-y: scroll;
  max-height: 700px;
`;

const CompleteButton = styled.button`
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

export function OrderCompleted() {
  const [cart] = useState(getCartItems());
  const [user] = useState(getUserData());
  const history = useHistory();

  useEffect(() => {
    clearUserData();
    clearCart();
  }, []);

  const handleClose = () => {
    history.push('/');
  }

  return (
    <LayoutStyle>
      <PanelStyle>
        <h2>{`Thank you ${user.name} for your purchase!`}</h2>
        <h4>You ordered ({cart.length} article)</h4>
        <ScrollStyle>
          {cart.map((item) => (
            <Card
              key={item.name}
              {...item}
            />
          ))}
        </ScrollStyle>
        <CompleteButton onClick={handleClose}>
          Close summary
        </CompleteButton>
      </PanelStyle>
    </LayoutStyle>
  );
}
