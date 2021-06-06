const STORAGE_KEY = "cart";

export const getCartItems = () => {
  try {
    const cartStorage = localStorage.getItem(STORAGE_KEY);
     if(cartStorage === null){
       return [];
     }
    return JSON.parse(cartStorage);
  } catch (e) {
    return [];
  }
};

export const addToCart = (item) => {
  const cartStorage = getCartItems();
  cartStorage.push(item);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(cartStorage));
};

export const removeFromCart = (name) => {
  const cartStorage = getCartItems();
  const filteredCart = cartStorage.filter((c) => c.name !== name);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(filteredCart));
  return filteredCart;
};
