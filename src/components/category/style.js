// importa o pacote "styled-components":
import styled from 'styled-components';

// Estilizando um parágrafo:
// A constante exportada deve começar com letra miúscula:
export const CategoryItem = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 150px;
  border-radius: 5px;
  text-align: center;
  overflow: hidden;

  img{
    object-position: center;
    object-fit: cover;
    width: 100%;
    border-radius: 5px;
    transition: transform 200ms ease-out;
  }

  .text {
    position: absolute;
    background-color: #00000091;
    padding: 9px;
    border: 1px solid floralwhite;
    z-index: 0;

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

  &:hover {
    cursor: pointer;

    img{
      transition: transform 3s ease-in;
      transform: scale(1.1);
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
