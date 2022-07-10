import React from 'react';
import { BsHandbag } from 'react-icons/bs';
// importa Links:
import { Link } from 'react-router-dom';
// importa o svg da logo:
import { ReactComponent as Logo } from '../../favicon.svg';
// importa styled component específico para esta página:
import { NavContainer } from './style';

function Navbar() {
  return (
    <NavContainer>
      <Link to="/" className="logo">
        <Logo className="logo-icon" />
      </Link>
      <Link to="/demo">PRODUTOS</Link>
      <Link to="/demo">CONTATO</Link>
      <Link to="/signIn">LOGIN</Link>
      <Link to="/demo">
        <BsHandbag className="shopping-bag-icon" />
      </Link>
    </NavContainer>
  );
}

export default Navbar;
