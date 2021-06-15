import styled from "styled-components";
import { GRAY } from "../../ShoppingCart/constants";
import { HRStyle } from "./Hr";

const CardStyle = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  img {
    width: 100px;
    background-color: ${GRAY};
  }
  div {
    padding: 1rem;
  }
`;

const CardPriceStyle = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const RemoveStyle = styled.a`
  color: black;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  };
  visibility: ${({ isVisible }) => isVisible ? 'visible' : 'hidden'}
`;

const QuantityButton = styled.button`
  visibility: ${({ isVisible }) => isVisible ? 'visible' : 'hidden'}
`;

export const Card = ({
  name, img, type, price, quantity, onRemove, onQuantityChange, isActionsDisabled,
}) => (
  <>
    <CardStyle>
      <img src={img} alt={name} />
      <div>
        <strong>{name}</strong>
        <p>{type}</p>
        <RemoveStyle
          onClick={onRemove}
          isVisible={onRemove}
        >Remove</RemoveStyle>
      </div>
      <CardPriceStyle>
        <QuantityButton
          type="button"
          onClick={() => onQuantityChange(name, quantity - 1)}
          isVisible={!isActionsDisabled}
          // isVisible={onQuantityChange}
        >-</QuantityButton>
        <p>{quantity}</p>
        <QuantityButton
          type="button"
          onClick={() => onQuantityChange(name, quantity + 1)}
          isVisible={!isActionsDisabled}
          // isVisible={onQuantityChange}
        >+</QuantityButton>
        <p>{price}</p>
      </CardPriceStyle>
    </CardStyle>
    <HRStyle />
  </>
);
