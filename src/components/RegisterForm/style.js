// importa o pacote "styled-components":
import styled from 'styled-components';

// A constante exportada deve começar com letra miúscula:
export const FormContainer = styled.form`

    button{
      margin: 15px auto;
      width: 100%;
      color: floralwhite;
      background-color: #181818;
      border: 2px solid #181818;
      padding: 8px 13px;

        &:hover{
          transition: all 250ms ease-in;
          background-color: floralwhite;
          color: #181818;
          }
    }
`;
