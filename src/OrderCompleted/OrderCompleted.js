import styled from 'styled-components'
import {getCustomerDetail} from '../common/customerInfo'
import {getCartItems} from '../common/pokemonStorage'

const Wrapper = styled.div`
  margin: 5px;
  width: 550px;
  background-color: #ffffcc ;
`;
const Message = styled.h4`
  padding: 10px;
  display: flex;
`;
const ScrollStyle = styled.div`
  overflow-y: scroll;
  max-height: 500px;
  width: 500px;
`;
const CardStyle = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  img {
    width: 100px;
    background-color: cream;
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
const Card = ({name, img, type, price, quantity}) =>(
  <CardStyle>
      <img src={img} alt={name} />
      <div>
        <strong>{name}</strong>
        <p>{type}</p>
      </div>
      <CardPriceStyle>
        <p>{quantity}</p> <p>{price}</p>
      </CardPriceStyle>
    </CardStyle>
);
export function OrderCompleted() {
  const customerName = getCustomerDetail();
  const cart= getCartItems();
  return (
  <Wrapper>
    <Message>Hello {customerName} your order was successfully placed, Thank You for Shopping with us!!</Message>
    <br />
    <Message>ORDERED LIST</Message>
    <ScrollStyle>
          {cart.map((item) => (
            <Card
              key={item.name}
              {...item}
            />
          ))}
          <h5>TOTAL AMOUNT={cart.reduce((acc, current) => acc + current.price, 0)}</h5>
        </ScrollStyle>  
  </Wrapper>
  );
}
