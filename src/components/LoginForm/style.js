// importa o pacote "styled-components":
import styled from 'styled-components';

// Estilizando um parágrafo:
// A constante exportada deve começar com letra miúscula:
export const FormContainer = styled.form`

    button{
      margin: 15px auto;
    }

      .button-login-container{
        display: grid;
        width: 300px;
        grid-template-columns: auto auto;
        gap: 3px;

        .signWithEmailAndPassword{
          color: floralwhite;
          background-color: #ed1010;

          &:hover{
            background-color: #f15959;
          }
        }

        .signWithGoogle {
          color: floralwhite;
          background-color: #181818;
          display:inline-flex;
          width: 122px;
          justify-content: space-around;
          align-items: center;

          &:hover{
            background-color: #5c5c5c;
          }
        }
      }

`;
