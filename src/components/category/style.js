// importa o pacote "styled-components":
import styled from 'styled-components';

// Estilizando um parágrafo:
// A constante exportada deve começar com letra miúscula:
export const CategoryItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 150px;
  border-radius: 5px;
  background-color: grey;
  text-align: center;
  color: floralwhite;
  transition: transform 250ms ease-in-out;

  &:hover {
    transform: scale(1.01);
    cursor: pointer;
  }

  .text {
    background-color: #00000091;
    padding: 9px;
    border: 1px solid floralwhite;

    h2,
    p {
      line-height: 20px;
      color: floralwhite;
      font-weight: bold;
    }

    h2 {
      font-size: 22px;
    }

    p {
      font-size: 13px;
    }
  }

  @media (max-width: 920px) {
    height: 140px;
  }

  @media (max-width: 740px) {
    height: 130px;
  }

  @media (max-width: 680px) {
    height: 120px;
  }

  @media (max-width: 580px) {
    height: 110px;
  }

  @media (max-width: 480px) {
    height: 100px;
  }
`;
