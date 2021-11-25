export const getToken = (key) => {
  return localStorage.getItem(key);
};

export const setToken = (key, value) => {
  return localStorage.setItem(key, value);
};

export const removeToken = (key) => {
  return localStorage.removeItem(key);
};
