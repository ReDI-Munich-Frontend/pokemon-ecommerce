import styled from "styled-components";
import { GRAY } from "./constants";
import { Card } from "./components/Card";
import { Total } from "./components/Total";
import {
  getCartItems,
  getOrderDetails,
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

export function OrderCompleted() {
  const cart = getCartItems();
  const order = getOrderDetails();
  console.log("order", order);
  const cartCounter = getCounter();
  const total = cart.reduce(
    (acc, current) => acc + current.price * current.quantity,
    0
  );

  return (
    <div className="container">
      <h1>
        {order.fName} {order.lName}
      </h1>
      <LayoutStyle>
        <PanelStyle>
          <h2>Order Details: (Total {cartCounter} articles)</h2>
          <ScrollStyle>
            {cart.map((item) => (
              <Card key={item.name} {...item} />
            ))}
          </ScrollStyle>
        </PanelStyle>
        <PanelStyle>
          <Total total={total} />
        </PanelStyle>
      </LayoutStyle>
    </div>
  );
}
