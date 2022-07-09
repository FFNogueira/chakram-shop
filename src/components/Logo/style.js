// importa o pacote "styled-components":
import styled from 'styled-components';

// Estilizando um parágrafo:
// A constante exportada deve começar com letra miúscula:
export const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  small,
  h1 {
    font-family: 'Orbitron', sans-serif;
    text-align: center;
    justify-content: center;
  }

  h1 {
    font-size: 42px;
    line-height: 37px;
  }

  small {
    line-height: 20px;
    display: block;
    font-size: 15px;
  }
`;
