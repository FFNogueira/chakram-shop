// Permite estilização a nível global da página HTML:
import { createGlobalStyle } from 'styled-components';
// Ativa e permite estilização dos elementos do toastfy:
import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`

  *{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    outline: none;
   }

   html, body, #root{
     height: 100%;
   }

  body{
     font-family: 'Quicksand', 'Open Sans', 'Helvetica Neue', sans-serif;
     background:linear-gradient(90deg, rgba(177,193,249,1) 0%, rgba(206,239,246,1) 50%, rgba(221,244,245,1) 100%);
    }

   svg {
     pointer-events: none;
   }

   a {
     text-decoration: none;
   }

   button{
    border: none;
    border-radius: 4px;
    cursor: pointer;
    padding: 10px 15px;
    margin: 10px auto;
    font-size: 16px;
   }
`;
