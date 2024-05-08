export const setItemsInLocalStorage = (key, value) => {
  if (!key || !value) {
    return console.error('Cannot store in LocalStorage');
  }

  const valueToStore =
    typeof value !== 'string' ? JSON.stringify(value) : value;
  localStorage.setItem(key, valueToStore);
};

export const getItemFromLocalStorage = (key) => {
  if (!key) {
    return console.error(`Cannot get value from LocalStorage`);
  }
  return localStorage.getItem(key);
};

export const removeItemFromLocalStorage = (key) => {
  if (!key) {
    return console.error(`Cannot remove item from LocalStorage`);
  }
  localStorage.removeItem(key);
};
