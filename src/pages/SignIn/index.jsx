import React from 'react';
// hooks:
import { useLocation } from 'react-router-dom';
// meus módulos:
import getProps from '../../modules/getProps';
// Componentes:
import LoginForm from '../../components/LoginForm';
import RegisterForm from '../../components/RegisterForm';
// estilo específico desta página:
import { SignPage } from './style';

function SignIn() {
  // obtém o caminho/link anterior (em caso de redirecionamento para cá):
  const location = useLocation();
  const prevPath = getProps(location, 'state.prevPath', '/');
  // estados:
  const [pointerEvents, setPointerEvents] = React.useState('all');

  return (
    <SignPage>
      <LoginForm
        pointerEvents={pointerEvents}
        setPointerEvents={setPointerEvents}
        prevPath={prevPath}
      />
      <RegisterForm
        pointerEvents={pointerEvents}
        setPointerEvents={setPointerEvents}
        prevPath={prevPath}
      />
    </SignPage>
  );
}

export default SignIn;
