// importa o pacote "styled-components":
import styled from 'styled-components';

export const SignPage = styled.section`

display: flex;
justify-content: space-around;
max-width: 800px;
margin: 20px auto;
flex-wrap: wrap;

form{
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  max-width: 340px;
  margin: 0 20px;

  p{
        font-size: 26px;
        font-weight: bold;
        padding: 20px;
    }

    input{
       width: 300px;
       padding: 7px;
       margin: 3px 0;
       border-bottom: 1px solid black;
       font-size: 18px;
       background-color: transparent;
       border-radius: 4px;

       &:focus{
        border-bottom: 1px solid #122bdf;
       }

       &::placeholder{
        font-family: 'Quicksand',sans-serif;
        font-style: italic;
       }
      }

}
`;
