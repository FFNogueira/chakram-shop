import React from 'react';
// Redirecionador de rotas
import { Navigate, useLocation } from 'react-router-dom';
// Proptypes:
import PropTypes from 'prop-types';
// Contexto com variáveis de estado global:
import { Context } from './context';

function ProtectedRoute({ prevPath, myElement }) {
  // verifica se há usuário logado:
  const { currentUser } = React.useContext(Context);
  // tenta obter dados provenientes do state de location:
  const location = useLocation();
  // dados auxiliares que porventura tenham sido enviados:
  const data = location?.state?.data ? location.state.data : {};
  // ===========================
  // Se usuário estiver logado:
  // ===========================
  if (currentUser) {
    switch (prevPath) {
      case '/signIn':
        // se tentar acessar página de login, redirecione para homepage:
        return <Navigate to="/" />;

      default:
        // senão prossiga para a página desejada:
        return myElement;
    }
  }
  // ==============================
  // Se usuário NÃO estiver logado:
  // ==============================
  switch (prevPath) {
    case '/signIn':
      // ...e tentar acessar página de login, permita:
      return myElement;

    default:
      // se tentar acessar página protegida, redirecione para a página de login:
      return <Navigate to="/signIn" state={{ prevPath, data }} />;
  }
}

ProtectedRoute.propTypes = {
  prevPath: PropTypes.string.isRequired,
  myElement: PropTypes.element.isRequired,
};

export default ProtectedRoute;
