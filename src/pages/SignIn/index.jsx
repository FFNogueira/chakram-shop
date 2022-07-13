import React from 'react';
// Componentes:
import LoginForm from '../../components/LoginForm';
import RegisterForm from '../../components/RegisterForm';
// estilo específico desta página:
import { SignPage } from './style';

function SignIn() {
  return (
    <SignPage>
      <LoginForm />
      <RegisterForm />
    </SignPage>
  );
}

export default SignIn;
