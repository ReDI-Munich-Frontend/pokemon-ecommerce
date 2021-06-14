const STORAGE_KEY = "cart";

export const getCartItems = () => {
  try {
    const cartStorage = localStorage.getItem(STORAGE_KEY);
    return JSON.parse(cartStorage) || [];
  } catch (e) {
    return [];
  }
};

export const updateCart = (item) => {
  const cartStorage = getCartItems();

  localStorage.setItem(STORAGE_KEY, JSON.stringify(cartStorage.map((c) => {
    if (c.name === item.name) {
      return {
        ...item,
      };
    }

    return c;
  })));
}

export const addToCart = (item) => {
  const cartStorage = getCartItems();

  const isElementinCartIndex = cartStorage.findIndex(({ name }) => name === item.name);
  if (isElementinCartIndex !== -1) {
    cartStorage[isElementinCartIndex].quantity += 1;
  } else {
    cartStorage.push(item);
  }

  localStorage.setItem(STORAGE_KEY, JSON.stringify(cartStorage));
};

export const removeFromCart = (name) => {
  const cartStorage = getCartItems();
  const filteredCart = cartStorage.filter((c) => c.name !== name);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(filteredCart));
  return filteredCart;
};

export const clearCart = () => localStorage.setItem(STORAGE_KEY, JSON.stringify([]));