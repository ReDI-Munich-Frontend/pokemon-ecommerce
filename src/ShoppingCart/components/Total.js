import styled from "styled-components";
import { HRStyle } from "../../common/ShoppingCard";
import { PrimaryButton } from '../../common/Button';

const TotalItemStyle = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Total = ({ total, onCheckout }) => (
  <div>
    <h2>Total</h2>
    <TotalItemStyle>
      <span>Subtotal</span>
      <span>{(total * 0.8).toFixed(2)}</span>
    </TotalItemStyle>
    <HRStyle />
    <TotalItemStyle>
      <strong>Total (VAT included)</strong>
      <strong>{total}</strong>
    </TotalItemStyle>
    <HRStyle />
    <PrimaryButton onClick={onCheckout}>Checkout</PrimaryButton>
  </div>
);
