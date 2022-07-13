import React from 'react';
import { FormContainer } from './style';
import {
  createUserDocument,
  registerUsingEmailAndPassword,
} from '../../services/firebase';
// mensageiro toastify:
import sendToast from '../../modules/sendToast';

function RegisterForm() {
  // variáveis de estado local:
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleEmailAndPasswordRegister = async () => {
    try {
      // tenta fazer login usando email e senha:
      const registerData = await registerUsingEmailAndPassword(email, password);
      // se houve algum erro:
      if (registerData.errors?.length > 0) {
        // enviar toast com todos os erros!!
        sendToast(
          'error',
          <>
            {registerData.errors.map((e) => {
              return <p key={e}>{e}</p>;
            })}
          </>,
        );
      }
      // Se deu tudo certo:
      else {
        // tenta criar um novo documento na coleção "users":
        const doc = await createUserDocument(registerData.user);
        // se houve erros na etapa anterior:
        if (doc.errors) {
          sendToast('error', doc.errors[0]);
        }
        // Se deu tudo certo:
        else {
          sendToast('success', 'Registro efetuado!', 4000);
          // ::::::::::::::::::::::::::::::::::::::::::::::::
          // TODO: provavelmente redirecionar para outra página
          // :::::::::::::::::::::::::::::::::::::::::::::::::
        }
      }
    } catch (err) {
      console.log('*MEU ERRO:*', err);
    }
  };

  return (
    <FormContainer action="">
      <p>Registre-se</p>
      <label htmlFor="register-email">
        <input
          type="email"
          id="register-email"
          placeholder="e-mail"
          onChange={(e) => {
            setEmail(e.currentTarget.value);
          }}
        />
      </label>
      <label htmlFor="register-password">
        <input
          type="password"
          id="register-password"
          placeholder="password"
          onChange={(e) => {
            setPassword(e.currentTarget.value);
          }}
        />
      </label>
      <button
        type="button"
        className="register"
        onClick={handleEmailAndPasswordRegister}
      >
        Registrar
      </button>
    </FormContainer>
  );
}

export default RegisterForm;
