import React from 'react';
import { FaGoogle } from 'react-icons/fa';
// estilo específico desta página:
import { SignPage } from './style';
import {
  signInWithGooglePopup,
  createUserDocument,
  signInUsingEmailandPassword,
} from '../../services/firebase';
// mensageiro toastify:
import sendToast from '../../modules/sendToast';

function SignIn() {
  // variáveis de estado local:
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleGoogleLogin = async () => {
    try {
      // tenta fazer login usando conta google:
      const loginData = await signInWithGooglePopup();
      // se der certo, tente criar um documento...
      // ...na coleção 'users' (apenas se este usuário...
      // ...já não esiver cadastrado):
      const doc = await createUserDocument(loginData.user);
      // se ocorreu erros na criação do novo usuário:
      if (doc.errors) sendToast('error', doc.errors[0]);
      else {
        // ::::::::::::::::::::::::::::::::::::::::::::::::
        // TODO: provavelmente redirecionar para outra página
        // :::::::::::::::::::::::::::::::::::::::::::::::::
      }
    } catch (err) {
      console.log('*MEU ERRO:*', err);
    }
  };

  const handleEmailAndPasswordLogin = async () => {
    try {
      // tenta fazer login usando email e senha:
      const loginData = await signInUsingEmailandPassword(email, password);
      // se houve algum erro:
      if (loginData.errors) sendToast('error', loginData.errors[0]);
      else {
        // ::::::::::::::::::::::::::::::::::::::::::::::::
        // TODO: provavelmente redirecionar para outra página
        // :::::::::::::::::::::::::::::::::::::::::::::::::
      }
    } catch (err) {
      console.log('*MEU ERRO:*', err);
    }
  };

  return (
    <SignPage>
      <form action="" className="loginForm">
        <p>Fazer login</p>
        <label htmlFor="email">
          <input
            type="email"
            id="email"
            placeholder="e-mail"
            onChange={(e) => {
              setEmail(e.currentTarget.value);
            }}
          />
        </label>
        <label htmlFor="password">
          <input
            type="password"
            id="password"
            placeholder="password"
            onChange={(e) => {
              setPassword(e.currentTarget.value);
            }}
          />
        </label>
        <div className="button-login-container">
          <button
            type="button"
            className="signWithGoogle"
            onClick={handleGoogleLogin}
          >
            logar com <FaGoogle />
          </button>
          <button
            type="button"
            className="signWithEmailAndPassword"
            onClick={handleEmailAndPasswordLogin}
          >
            logar com sua conta
          </button>
        </div>
      </form>

      <form action="" className="registerForm">
        <p>Registre-se</p>
        <label htmlFor="email2">
          <input type="email" id="email2" placeholder="e-mail" />
        </label>
        <label htmlFor="password2">
          <input type="password" id="password2" placeholder="password" />
        </label>
        <button type="button" className="register">
          Registrar
        </button>
      </form>
    </SignPage>
  );
}

export default SignIn;
