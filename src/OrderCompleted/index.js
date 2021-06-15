import { useState, useEffect } from "react";
import { Card } from '../common/ShoppingCard';
import { getCartItems, clearCart } from "../common/pokemonStorage";

export function OrderCompleted() {
  const [cart] = useState(getCartItems());

  useEffect(() => {
    clearCart();
  }, []);

  return (
    <div>
      Ican thanks for your order.
      {
        cart.map((item) => (
          <Card
            key={item.name}
            {...item}
            isActionsDisabled
          />
        ))
      }
    </div>
  );
}