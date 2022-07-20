import React from 'react';
import { BsHandbag } from 'react-icons/bs';
// importa Links:
import { Link, useNavigate } from 'react-router-dom';
// importa o svg da logo:
import { ReactComponent as Logo } from '../../favicon.svg';
// importa styled component específico para esta página:
import { NavContainer } from './style';
// variáveis de estado global de Context:
import { Context } from '../../services/context';
// Serviços do firebase:
import { signOutUser } from '../../services/firebase';
// mensageiro toastify:
import sendToast from '../../modules/sendToast';

function Navbar() {
  // hook redirecionador:
  const navigate = useNavigate();
  // Tenta obter o usuário logado atualmente + função setter:
  const { currentUser, setCurrentUser } = React.useContext(Context);

  const handleSignOutUser = async () => {
    const res = await signOutUser();
    // se logout falhou:
    if (res?.errors) sendToast('errors', res.errors[0]);
    // se logout deu certo:
    else {
      setCurrentUser(null);
      navigate('/');
    }
  };

  return (
    <NavContainer>
      <Link to="/" className="logo">
        <Logo className="logo-icon" />
      </Link>
      <Link to="/demo">PRODUTOS</Link>
      <Link to="/contact">CONTATO</Link>
      {currentUser ? (
        <button type="button" onClick={handleSignOutUser}>
          LOGOUT
        </button>
      ) : (
        <Link to="/signIn">LOGIN</Link>
      )}
      <Link to="/demo">
        <BsHandbag className="shopping-bag-icon" />
      </Link>
    </NavContainer>
  );
}

export default Navbar;
