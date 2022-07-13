import React from 'react';
import { FaGoogle } from 'react-icons/fa';
import { FormContainer } from './style';
import {
  signInWithGooglePopup,
  createUserDocument,
  signInUsingEmailandPassword,
} from '../../services/firebase';
// mensageiro toastify:
import sendToast from '../../modules/sendToast';

function LoginForm() {
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
      sendToast('loading', 'Logando...');
      // tenta fazer login usando email e senha:
      const loginData = await signInUsingEmailandPassword(email, password);
      // se houve algum erro:
      if (loginData.errors) sendToast('error', loginData.errors[0]);
      // Se deu tudo certo:
      else {
        sendToast('success', 'Logado com sucesso!', 4000);
        // ::::::::::::::::::::::::::::::::::::::::::::::::
        // TODO: provavelmente redirecionar para outra página
        // :::::::::::::::::::::::::::::::::::::::::::::::::
      }
    } catch (err) {
      console.log('*MEU ERRO:*', err);
    }
  };

  // Executa sempre que o componente é renderizado:
  return (
    <FormContainer action="">
      <p>Faça login</p>
      <label htmlFor="login-email">
        <input
          type="email"
          id="login-email"
          placeholder="e-mail"
          onChange={(e) => {
            setEmail(e.currentTarget.value);
          }}
        />
      </label>
      <label htmlFor="login-password">
        <input
          type="password"
          id="login-password"
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
          <span>logar com</span> <FaGoogle />
        </button>
        <button
          type="button"
          className="signWithEmailAndPassword"
          onClick={handleEmailAndPasswordLogin}
        >
          logar com sua conta
        </button>
      </div>
    </FormContainer>
  );
}

export default LoginForm;
