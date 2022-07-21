import React from 'react';
// styled component:
import { LoadingPage } from './style';
// importa o svg da logo:
import { ReactComponent as Logo } from '../../favicon.svg';

function LoadingScreen() {
  const [display, setDisplay] = React.useState('flex');

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setDisplay('none');
    }, 1000);
    // desativa o timer:
    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <LoadingPage style={{ display }}>
      <Logo />
      <h1>CARREGANDO...</h1>
    </LoadingPage>
  );
}

export default LoadingScreen;
