const STORAGE_KEY = "cart";
const COUNTER_KEY = "counter";
const ORDER_KEY = "order";

export const getOrderDetails = () => {
  try {
    const orderStorage = localStorage.getItem(ORDER_KEY);
    return orderStorage ? JSON.parse(orderStorage) : [];
  } catch (e) {
    return [];
  }
};

export const getCartItems = () => {
  try {
    const cartStorage = localStorage.getItem(STORAGE_KEY);
    return cartStorage ? JSON.parse(cartStorage) : [];
  } catch (e) {
    return [];
  }
};

export const getCounter = () => {
  try {
    const counterStorage = localStorage.getItem(COUNTER_KEY);
    if (counterStorage) {
      /* eslint-disable */
      const count = parseInt(counterStorage);
      return count;
    }
    return 0;
  } catch (e) {
    return [];
  }
};

export const addToCart = (item) => {
  const cartStorage = getCartItems();
  const currentCounter = getCounter();
  const foundIndex = cartStorage.findIndex((itm) => itm.name === item.name);
  if (foundIndex > -1) {
    /* eslint-disable */
    let indexValue = cartStorage[foundIndex];
    item["quantity"] = indexValue["quantity"] + 1;
    cartStorage.splice(foundIndex, 1);
  }
  cartStorage.push(item);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(cartStorage));
  localStorage.setItem(COUNTER_KEY, currentCounter + 1);
  return cartStorage;
};

export const addOrderDetails = (orderDetail) => {
  localStorage.removeItem(ORDER_KEY);
  localStorage.setItem(ORDER_KEY, JSON.stringify(orderDetail));
};

export const removeFromCart = (name) => {
  const cartStorage = getCartItems();
  const currentCounter = getCounter();
  console.log("currentCounter", currentCounter);
  if (currentCounter > 0) {
    localStorage.setItem(COUNTER_KEY, currentCounter - 1);
  }
  const foundIndex = cartStorage.findIndex((itm) => itm.name === name);
  if (foundIndex > -1) {
    /* eslint-disable */
    if (cartStorage[foundIndex]["quantity"] > 1) {
      cartStorage[foundIndex]["quantity"] =
        cartStorage[foundIndex]["quantity"] - 1;
      localStorage.setItem(STORAGE_KEY, JSON.stringify(cartStorage));
      return cartStorage;
    } else {
      const filteredCart = cartStorage.filter((c) => c.name !== name);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(filteredCart));
      return filteredCart;
    }
  }
};

export const emptyStorage = () => {
  localStorage.removeItem(ORDER_KEY);
  localStorage.removeItem(COUNTER_KEY);
  localStorage.removeItem(STORAGE_KEY);
};
