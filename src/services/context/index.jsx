/* eslint-disable react/jsx-no-constructed-context-values */
import React from 'react';
// prop-types:
import PropTypes from 'prop-types';

// valor inicial do objeto Context:
export const Context = React.createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

// componente-provider para Context:
export function Provider({ children }) {
  // variáveis de estado global:
  const [currentUser, setCurrentUser] = React.useState(
    JSON.parse(window.localStorage.getItem('currentUser')),
  );
  // salva dados do usuário no LocalStorage...
  // ...sempre que estes mudarem:
  React.useEffect(() => {
    window.localStorage.setItem('currentUser', JSON.stringify(currentUser));
  }, [currentUser]);

  // "value" recebe as variáveis de estado global a serem observadas:
  const value = { currentUser, setCurrentUser };
  // RETORNANDO O PROVIDER:
  return <Context.Provider value={value}>{children}</Context.Provider>;
}

Provider.propTypes = {
  // children é um array de elementos React:
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};
