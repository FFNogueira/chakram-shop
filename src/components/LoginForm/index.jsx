import React from 'react';
// hooks:
import { useNavigate } from 'react-router-dom';
import { FaGoogle } from 'react-icons/fa';
// prop-types:
import PropTypes from 'prop-types';
// styled-component da página:
import { FormContainer } from './style';
// serviços do Firebase:
import {
  signInWithGooglePopup,
  createUserDocument,
  signInUsingEmailandPassword,
} from '../../services/firebase';
// mensageiro toastify:
import sendToast from '../../modules/sendToast';
// importa as variáveis de estado global de UserContext:
import { Context } from '../../services/context';

function LoginForm(props) {
  // hook de contexto do usuário atual:
  const { setCurrentUser } = React.useContext(Context);
  // hook redirecionador:
  const navigate = useNavigate();
  // obtendo props:
  const { pointerEvents, setPointerEvents, prevPath, data } = props;

  // variáveis de estado local:
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleGoogleLogin = async () => {
    try {
      setPointerEvents('none');
      // tenta fazer login usando conta google:
      const loginData = await signInWithGooglePopup();
      // se der certo, tente criar um documento...
      // ...na coleção 'users' (apenas se este usuário...
      // ...já não esiver cadastrado):
      const doc = await createUserDocument(loginData.user);
      // seta este usuário como logado no contexto atual:
      setCurrentUser(loginData.user);
      // se ocorreu erros na criação do novo usuário:
      if (doc.errors) {
        sendToast('error', doc.errors[0]);
        setPointerEvents('all');
      } else {
        setPointerEvents('all');
        sendToast('success', 'Logado com sucesso!', 4000);
        // redirecionar para outra página:
        navigate(prevPath, { state: { data } });
      }
    } catch (err) {
      setPointerEvents('all');
      console.log('*MEU ERRO:*', err);
    }
  };

  const handleEmailAndPasswordLogin = async (event) => {
    try {
      event.preventDefault();
      setPointerEvents('none');
      sendToast('loading', 'Logando...');
      // tenta fazer login usando email e senha:
      const loginData = await signInUsingEmailandPassword(email, password);
      // se houve algum erro:
      if (loginData.errors) {
        sendToast('error', loginData.errors[0]);
        setPointerEvents('all');
      }
      // Se deu tudo certo:
      else {
        // seta este usuário como logado no contexto atual:
        setCurrentUser(loginData.user);
        setPointerEvents('all');
        sendToast('success', 'Logado com sucesso!', 4000);
        // redirecionar para outra página:
        navigate(prevPath, { state: { data } });
      }
    } catch (err) {
      setPointerEvents('all');
      console.log('*MEU ERRO:*', err);
    }
  };

  // Executa sempre que o componente é renderizado:
  return (
    <FormContainer action="" onSubmit={handleEmailAndPasswordLogin}>
      <p>Faça login</p>
      <label htmlFor="login-email">
        <input
          required
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
          required
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
          style={{ pointerEvents }}
        >
          <span>logar com</span> <FaGoogle />
        </button>
        <button
          type="submit"
          className="signWithEmailAndPassword"
          style={{ pointerEvents }}
        >
          logar com sua conta
        </button>
      </div>
    </FormContainer>
  );
}

LoginForm.propTypes = {
  pointerEvents: PropTypes.string.isRequired,
  setPointerEvents: PropTypes.func.isRequired,
  prevPath: PropTypes.string.isRequired,
  data: PropTypes.shape({}).isRequired,
};

export default LoginForm;
