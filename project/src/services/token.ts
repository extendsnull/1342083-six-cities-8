const AUTH_TOKEN_KEY_NAME = 'extendsnull-six-cities-token';

type Token = string;

const getToket = (): Token => {
  const token = localStorage.getItem(AUTH_TOKEN_KEY_NAME);
  return token ?? '';
};

const setToken = (token: Token): void => {
  localStorage.setItem(AUTH_TOKEN_KEY_NAME, token);
};

const removeToken = (): void => {
  localStorage.removeItem(AUTH_TOKEN_KEY_NAME);
};

export {
  getToket,
  setToken,
  removeToken
};
