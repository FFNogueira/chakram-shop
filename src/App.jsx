import React from 'react';
// importa o roteador do react-router-dom:
import { BrowserRouter } from 'react-router-dom';
// Importa o React-Toastify (mensagens para o usuário)
import { ToastContainer, Slide } from 'react-toastify';
// Importa os estilos globais:
import GlobalStyle from './styles/GlobalStyle';
// importa minhas rotas de páginas:
import MyRoutes from './routes';

function App() {
  // Executa sempre que o componente é renderizado:

  return (
    <BrowserRouter>
      <MyRoutes />
      <GlobalStyle />
      <ToastContainer
        position="bottom-center"
        className="toast-container"
        autoClose={false}
        draggable={false}
        transition={Slide}
        limit={1}
      />
    </BrowserRouter>
  );
}

export default App;
