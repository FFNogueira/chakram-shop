import React from 'react';
// estilo específico desta página:
import { SignPage } from './style';
import {
  signInWithGooglePopup,
  createUserDocument,
} from '../../services/firebase';
// mensageiro toastify:
import sendToast from '../../modules/sendToast';

function SignIn() {
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
      console.log('ERRO', err);
    }
  };

  return (
    <SignPage>
      <h1>Página de login/cadastro</h1>
      <div className="forms-container">
        <p>TODO: formulaários</p>
        <button type="button" onClick={handleGoogleLogin}>
          login
        </button>
      </div>
    </SignPage>
  );
}

export default SignIn;
