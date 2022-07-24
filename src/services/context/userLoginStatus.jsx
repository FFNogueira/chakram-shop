import React from 'react';
// prop-types:
import PropTypes from 'prop-types';
// observador de mudança de estado de login:
import { onAuthStateChangedListener } from '../firebase';

// valor inicial do objeto Context:
export const userLoginStatusContext = React.createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

// Provider para este contexto:
export function UserLoginStatusProvider({ children }) {
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
  return (
    <userLoginStatusContext.Provider value={value}>
      {children}
    </userLoginStatusContext.Provider>
  );
}

UserLoginStatusProvider.propTypes = {
  // children é um array de elementos React:
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element,
  ]).isRequired,
};
