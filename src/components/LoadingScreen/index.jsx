import React from 'react';
// react-spinner:
import BarLoader from 'react-spinners/BarLoader';
// styled component:
import { LoadingPage } from './style';
// importa o svg da logo:
import { ReactComponent as Logo } from '../../favicon.svg';

function LoadingScreen() {
  const [display, setDisplay] = React.useState('flex');

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setDisplay('none');
    }, 2000);
    // desativa o timer:
    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <LoadingPage style={{ display }}>
      <Logo />
      <BarLoader className="loader" width="200px" />
    </LoadingPage>
  );
}

export default LoadingScreen;
