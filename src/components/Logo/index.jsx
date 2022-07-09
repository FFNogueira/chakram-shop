import React from 'react';

// importa styled component específico para esta página:
import { get } from 'lodash';
import { LogoContainer } from './style';
// importa o get do lodash:

function Logo(props) {
  const displayMode = get(props, 'icon', false) ? 'none' : 'block';

  return (
    <LogoContainer>
      <h1 style={{ display: displayMode }}>Chakram</h1>
      <img
        alt="logo"
        height="60px"
        width="60px"
        src="https://www.svgrepo.com/show/322005/chakram.svg"
      />
      <small style={{ display: displayMode }}>stay fancy!</small>
    </LogoContainer>
  );
}

export default Logo;
