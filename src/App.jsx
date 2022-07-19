import React from 'react';
// importa o roteador do react-router-dom:
import { BrowserRouter } from 'react-router-dom';
// Importa o React-Toastify (mensagens para o usuário)
import { ToastContainer, Slide } from 'react-toastify';
// Importa os estilos globais:
import GlobalStyle from './styles/GlobalStyle';
// importa minhas rotas de páginas:
import MyRoutes from './routes';
// importa a Navbar:
import Navbar from './components/Navbar';
// importa o provider de variáveis de estado global:
import { Provider } from './services/context';

function App() {
  // Executa sempre que o componente é renderizado:

  return (
    <BrowserRouter>
      <Provider>
        <Navbar />
        <MyRoutes />
        <GlobalStyle />
        <ToastContainer
          position="bottom-center"
          className="toast-container"
          autoClose={false}
          draggable={false}
          transition={Slide}
        />
      </Provider>
    </BrowserRouter>
  );
}

export default App;
