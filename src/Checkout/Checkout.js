import { useHistory } from 'react-router-dom';
import { PrimaryButton } from '../common/Button';

export function Checkout() {
  const history = useHistory();

  const handleConfirm = () => {
    history.push('/order-completed')
  };

  return (
    <div>
      Checkout
      <PrimaryButton
        onClick={handleConfirm}
      >Confirm order</PrimaryButton>
    </div>
  );
}
