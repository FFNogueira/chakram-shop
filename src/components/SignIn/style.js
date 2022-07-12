// importa o pacote "styled-components":
import styled from 'styled-components';

export const SignPage = styled.section`
    display: flex;
    justify-content: space-around;
    max-width: 800px;
    margin: 20px auto;

    form{
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      max-width: 340px;
    }

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

    .loginForm{
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
          justify-content: space-between;
          align-items: center;

          &:hover{
            background-color: #5c5c5c;
          }
        }
      }
    }

    .registerForm{
      button{
        width: 100%;
        color: floralwhite;
        background-color: #181818;

        &:hover{
            background-color: #5c5c5c;
          }
      }
    }
`;
