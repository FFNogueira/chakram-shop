import React from 'react';
// Componentes:
import LoginForm from '../../components/LoginForm';
import RegisterForm from '../../components/RegisterForm';
// estilo específico desta página:
import { SignPage } from './style';

function SignIn() {
  const [pointerEvents, setPointerEvents] = React.useState('all');

  return (
    <SignPage>
      <LoginForm args={{ pointerEvents, setPointerEvents }} />
      <RegisterForm args={{ pointerEvents, setPointerEvents }} />
    </SignPage>
  );
}

export default SignIn;
