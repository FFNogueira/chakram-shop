// importa o pacote "styled-components":
import styled from 'styled-components';

// Estilizando um parágrafo:
// A constante exportada deve começar com letra miúscula:
export const FormContainer = styled.form`

    button{
      margin: 15px auto;
      padding: 8px 13px;
    }

      .button-login-container{
        display: grid;
        width: 300px;
        grid-template-columns: auto auto;
        gap: 3px;

        .signWithEmailAndPassword{
          color: floralwhite;
          background-color: #ed1010;
          border: 2px solid #ed1010;

          &:hover{
            transition: all 250ms ease-in;
            background-color: floralwhite;
            color: #ed1010;

          }
        }

        .signWithGoogle {
          color: floralwhite;
          background-color: #181818;
          display:inline-flex;
          width: 122px;
          justify-content: space-around;
          align-items: center;
          border: 2px solid #181818;

          &:hover{
            transition: all 250ms ease-in;
            background-color: floralwhite;
            color: #181818;

          }
        }
      }

`;
