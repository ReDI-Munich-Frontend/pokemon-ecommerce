import styled from "styled-components";
import { useState } from "react";
import { GRAY } from "./constants";
import { Card } from "./components/Card";
import { Total } from "./components/Total";
import {
  getCartItems,
  removeFromCart,
  addToCart,
  getCounter,
} from "../common/pokemonStorage";

const LayoutStyle = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
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
  max-height: 500px;
`;

export function ShoppingCart() {
  const [cart, setCart] = useState(getCartItems());
  const [cartCounter, setCartCounter] = useState(getCounter());
  const [total, setTotal] = useState(
    cart.reduce((acc, current) => acc + current.price * current.quantity, 0)
  );

  const setCartTotal = () => {
    setTotal(
      cart.reduce((acc, current) => acc + current.price * current.quantity, 0)
    );
  };

  const handleRemove = (name) => {
    setCart(removeFromCart(name));
    setCartCounter(getCounter());
    setCartTotal();
  };
  const handleAdd = (item) => {
    setCart(addToCart(item));
    setCartCounter(getCounter());
    setCartTotal();
  };
  if (cart.length === 0) {
    return (
      <LayoutStyle>
        <PanelStyle>
          <h2>Your cart is empty</h2>{" "}
        </PanelStyle>
      </LayoutStyle>
    );
  }

  return (
    <LayoutStyle>
      <PanelStyle>
        <h2>Place you order ({cartCounter} article)</h2>
        <ScrollStyle>
          {cart.map((item) => (
            <Card
              key={item.name}
              {...item}
              onAdd={() => handleAdd(item)}
              onRemove={() => handleRemove(item.name)}
            />
          ))}
        </ScrollStyle>
      </PanelStyle>
      <PanelStyle>
        <Total total={total} />
      </PanelStyle>
    </LayoutStyle>
  );
}
