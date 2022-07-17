// importa o pacote "styled-components":
import styled from 'styled-components';

// A constante exportada deve começar com letra miúscula:
export const FormContainer = styled.form`

    button{
      margin: 15px auto;
      width: 100%;
      color: floralwhite;
      background-color: #181818;

        &:hover{
            background-color: #5c5c5c;
          }
    }
`;
