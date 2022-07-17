import React from 'react';
// prop-types:
import PropTypes from 'prop-types';
// estyled-component da página:
import { FormContainer } from './style';
// serviços do Firebase
import {
  createUserDocument,
  registerUsingEmailAndPassword,
} from '../../services/firebase';
// mensageiro toastify:
import sendToast from '../../modules/sendToast';

function RegisterForm(props) {
  const { pointerEvents, setPointerEvents } = props;
  // variáveis de estado local:
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [username, setUsername] = React.useState('');

  const handleEmailAndPasswordRegister = async () => {
    try {
      setPointerEvents('none');
      sendToast('loading', 'Registrando...');
      // tenta fazer login usando email e senha:
      const registerData = await registerUsingEmailAndPassword(
        email,
        password,
        username,
      );
      // se houve algum erro:
      if (registerData.errors?.length > 1) {
        setPointerEvents('all');
        // enviar toast com 2 ou mais erros!!
        sendToast(
          'error',
          <>
            {registerData.errors.map((e) => {
              return (
                <p key={e}>
                  <span>⇛</span> {e}
                </p>
              );
            })}
          </>,
        );
      } else if (registerData.errors?.length === 1) {
        setPointerEvents('all');
        // enviar toast com apenas 1 erro!!
        sendToast('error', registerData.errors[0]);
      }
      // Se deu tudo certo (sem erros):
      else {
        // tente criar um documento na coleção 'users'...
        // ...(apenas se este usuário...
        // ...já não esiver cadastrado):
        const doc = await createUserDocument(registerData.user, username);
        // se houve erros na etapa anterior:
        setPointerEvents('all');
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
      setPointerEvents('all');
      console.log('*MEU ERRO:*', err);
    }
  };

  return (
    <FormContainer action="">
      <p>Registre-se</p>
      <label htmlFor="register-username">
        <input
          type="text"
          id="register-username"
          placeholder="Nome de usuário"
          onChange={(e) => {
            setUsername(e.currentTarget.value);
          }}
        />
      </label>
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
        style={{ pointerEvents }}
      >
        Registrar
      </button>
    </FormContainer>
  );
}

RegisterForm.propTypes = {
  pointerEvents: PropTypes.string.isRequired,
  setPointerEvents: PropTypes.func.isRequired,
};

export default RegisterForm;
