// importa o pacote "styled-components":
import styled from 'styled-components';

// Estilizando um parágrafo:
// A constante exportada deve começar com letra miúscula:
export const FormContainer = styled.form`

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 340px;

  p{
        font-size: x-large;
        font-weight: bold;
        padding: 20px;
    }

    button{
      margin: 5px auto;
    }

    input{
       width: 300px;
       padding: 5px;
       margin: 3px 0;
       border: 2px solid black;
       border-radius: 4px;
       font-size: 18px;

       &:focus{
        border: 2px solid #ddd;
       }

       &::placeholder{
        font-family: 'Quicksand',sans-serif;
        font-style: italic;
       }
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
