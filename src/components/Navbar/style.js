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
      width: 55px;
      height: 55px;

      path {
        transition: fill 200ms ease-in-out;
      }
    }

    &:hover {
      .logo-icon path {
        fill: floralwhite;
      }
    }
  }

  a:not(.logo) {
    font-family: 'Orbitron', Courier, monospace;
    margin-right: 25px;
    font-size: 15px;
    color: black;
    transition: color 200ms ease-in-out;

    .shopping-bag-icon {
      font-size: 30px;
    }

    &:last-child {
      margin-right: 0;
    }

    &:hover {
      color: #2547ff;
    }
  }
`;
