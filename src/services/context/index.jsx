import React from 'react';
// prop-types:
import PropTypes from 'prop-types';
// observador de mudança de estado de login:
import { onAuthStateChangedListener } from '../firebase';

// valor inicial do objeto Context:
export const Context = React.createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

// componente-provider para Context:
export function Provider({ children }) {
  // variáveis de estado global:
  const [currentUser, setCurrentUser] = React.useState(null);

  // Executa o observador de mudança de estado de login...
  // ...sempre que o app montar:
  React.useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      // guardando o usuário atual em uma variável de estado golbal:
      setCurrentUser(user);
    });

    // executa a função "unsubscribe" quando o app for desmontado:
    return unsubscribe;
  }, []);

  // "value" recebe as variáveis de estado global a serem observadas:
  const value = React.useMemo(
    () => ({ currentUser, setCurrentUser }),
    [currentUser],
  );
  // RETORNANDO O PROVIDER:
  return <Context.Provider value={value}>{children}</Context.Provider>;
}

Provider.propTypes = {
  // children é um array de elementos React:
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};
