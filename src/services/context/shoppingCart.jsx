import React from 'react';
// prop-types:
import PropTypes from 'prop-types';

// valor inicial do objeto Context:
export const shoppingCartContext = React.createContext({
  cartItens: null,
  setCartItens: () => null,
});

// Provider para este contexto:
export function ShoppingCartProvider({ children }) {
  // variável de estado global:
  const [cartItens, setCartItens] = React.useState(
    JSON.parse(window.localStorage.getItem('cartItens'))
      ? JSON.parse(window.localStorage.getItem('cartItens'))
      : [],
  );

  // "value" recebe as variáveis de estado global a serem observadas:
  const value = React.useMemo(() => ({ cartItens, setCartItens }), [cartItens]);
  // RETORNANDO O PROVIDER:
  return (
    <shoppingCartContext.Provider value={value}>
      {children}
    </shoppingCartContext.Provider>
  );
}

ShoppingCartProvider.propTypes = {
  // children é um array de elementos React:
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};
