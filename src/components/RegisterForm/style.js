// importa o pacote "styled-components":
import styled from 'styled-components';

// A constante exportada deve começar com letra miúscula:
export const FormContainer = styled.form`

display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  max-width: 340px;

  p{
        font-size: x-large;
        font-weight: bold;
        padding: 20px;
    }

    button{
      margin: 5px auto;
      width: 100%;
      color: floralwhite;
      background-color: #181818;

        &:hover{
            background-color: #5c5c5c;
          }
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
`;
