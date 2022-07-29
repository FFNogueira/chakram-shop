// importa o pacote "styled-components":
import styled from 'styled-components';

// Estilizando um parágrafo:
// A constante exportada deve começar com letra miúscula:
export const NavContainer = styled.div`
  display: flex;
  padding: 20px 60px;
  align-items: center;
  flex-wrap: wrap;
  justify-content: flex-end;

  .logo {
    margin: 0 auto 0 0;
    .logo-icon {
      width: 60px;
      height: 60px;
      transition: color 250ms ease-in-out;
      color: black;
    }

    &:hover {
      .logo-icon {
        color: floralwhite;
      }
    }
  }

  a:not(.logo),button {
    padding: 0;
    background-color: transparent;
    font-family: 'Orbitron', Courier, monospace;
    margin: 0 25px 0 0;
    font-size: 15px;
    font-weight: 400;
    color: black;
    transition: color 250ms ease-in-out;

    &:hover {
      color: #2547ff;
    }
  }
`;
