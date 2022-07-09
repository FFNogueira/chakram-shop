// importa o pacote "styled-components":
import styled from 'styled-components';

// Estilizando um parágrafo:
// A constante exportada deve começar com letra miúscula:
export const Page = styled.section`
  margin: 30px auto;
  max-width: 900px;

  .categories {
    display: grid;
    padding-bottom: 20px;
    margin-top: 40px;
    grid-template-columns: 1fr 1fr;
    gap: 5px;
    grid-template-areas:
      'b b'
      'm f'
      'c j';

    .bones-chapeis {
      grid-area: b;
    }

    .calcados {
      grid-area: c;
    }

    .masculino {
      grid-area: m;
    }

    .feminino {
      grid-area: f;
    }

    .jaquetas {
      grid-area: j;
    }
  }

  @media (max-width: 920px) {
    max-width: 720px;
  }

  @media (max-width: 740px) {
    max-width: 640px;
  }

  @media (max-width: 680px) {
    max-width: 560px;
  }

  @media (max-width: 580px) {
    max-width: 460px;
  }

  @media (max-width: 480px) {
    max-width: 300px;
  }
`;
