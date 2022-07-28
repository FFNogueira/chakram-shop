import React from 'react';
import { Page } from './style';

function NotFound() {
  // Executa sempre que o componente é renderizado:
  return (
    <Page>
      <h1>404: NOT FOUND</h1>
      <small>this content is not available!</small>
    </Page>
  );
}

export default NotFound;
