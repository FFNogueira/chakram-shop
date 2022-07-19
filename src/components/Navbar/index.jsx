import React from 'react';
import { BsHandbag } from 'react-icons/bs';
// importa Links:
import { Link, useNavigate } from 'react-router-dom';
// importa o svg da logo:
import { ReactComponent as Logo } from '../../favicon.svg';
// importa styled component específico para esta página:
import { NavContainer } from './style';
// variáveis de estado global de UserContext:
import { Context } from '../../services/context';

function Navbar() {
  // hook redirecionador:
  const navigate = useNavigate();
  // Tenta obter o usuário logado atualmente + função setter:
  const { currentUser, setCurrentUser } = React.useContext(Context);

  return (
    <NavContainer>
      <Link to="/" className="logo">
        <Logo className="logo-icon" />
      </Link>
      <Link to="/demo">PRODUTOS</Link>
      <Link to="/demo">CONTATO</Link>
      {currentUser ? (
        <button
          type="button"
          onClick={() => {
            setCurrentUser(null);
            navigate('/');
          }}
        >
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
