import React from 'react';
import { BsHandbag } from 'react-icons/bs';
// importa Links:
import { Link } from 'react-router-dom';
// importa styled component específico para esta página:
import { NavContainer } from './style';

function Navbar() {
  return (
    <NavContainer>
      <Link to="/" className="logo">
        <img
          className="logo-icon"
          alt="logo"
          src="https://www.svgrepo.com/show/322005/chakram.svg"
        />
      </Link>
      <Link to="/demo">PRODUTOS</Link>
      <Link to="/demo">CONTATO</Link>
      <Link to="/demo">LOGIN</Link>
      <Link to="/demo">
        <BsHandbag className="shopping-bag-icon" />
      </Link>
    </NavContainer>
  );
}

export default Navbar;
