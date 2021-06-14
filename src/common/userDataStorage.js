const STORAGE_KEY = "userData";

export const getUserData = () => {
  try {
    const cartStorage = localStorage.getItem(STORAGE_KEY);
    return JSON.parse(cartStorage) || {};
  } catch (e) {
    return {};
  }
};

export const setUserData = (data) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
};

export const clearUserData = () => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify({}));
};
