const STORAGE_KEY = "cart";

export const getCartItems = () => {
  try {
    const cartStorage = localStorage.getItem(STORAGE_KEY);
    return JSON.parse(cartStorage);
  } catch (e) {
    return [];
  }
};

export const updateItemInCart = (name, quantity) => {
  const cartStorage = getCartItems();

  const updatedCart = cartStorage.map((c) => {
    if (c.name === name) {
      return {
        ...c,
        quantity,
      };
    }

    return c;
  });

  localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedCart));
  return updatedCart;
};

export const addToCart = (item) => {
  const cartStorage = getCartItems();

  const itemIndex = cartStorage.findIndex(({ name }) => name === item.name);
  if (itemIndex !== -1) {
    cartStorage[itemIndex] = {
      ...cartStorage[itemIndex],
      quantity: cartStorage[itemIndex].quantity + 1,
    };
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

export const clearCart = () => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify([]));
};
