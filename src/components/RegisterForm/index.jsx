import React from 'react';
// hooks:
import { useNavigate } from 'react-router-dom';
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
// importa as variáveis de estado global de UserContext:
import { Context } from '../../services/context';

function RegisterForm(props) {
  // hook de contexto do usuário atual:
  const { setCurrentUser } = React.useContext(Context);
  // hook redirecionador:
  const navigate = useNavigate();
  // obtendo props:
  const { pointerEvents, setPointerEvents, prevPath, data } = props;
  // variáveis de estado local:
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [username, setUsername] = React.useState('');

  const handleEmailAndPasswordRegister = async (event) => {
    try {
      event.preventDefault();
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
          // seta este usuário como logado no contexto atual:
          setCurrentUser(registerData.user);
          sendToast('success', 'Registro efetuado!', 4000);
          // redireciona para outra página:
          navigate(prevPath, { state: { data } });
        }
      }
    } catch (err) {
      setPointerEvents('all');
      console.log('*MEU ERRO:*', err);
    }
  };

  return (
    <FormContainer action="" onSubmit={handleEmailAndPasswordRegister}>
      <p>Registre-se</p>
      <label htmlFor="register-username">
        <input
          required
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
          required
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
          required
          type="password"
          id="register-password"
          placeholder="password"
          onChange={(e) => {
            setPassword(e.currentTarget.value);
          }}
        />
      </label>
      <button type="submit" className="register" style={{ pointerEvents }}>
        Registrar
      </button>
    </FormContainer>
  );
}

RegisterForm.propTypes = {
  pointerEvents: PropTypes.string.isRequired,
  setPointerEvents: PropTypes.func.isRequired,
  prevPath: PropTypes.string.isRequired,
  data: PropTypes.shape({}).isRequired,
};

export default RegisterForm;
