import React from 'react';
// estilo específico desta página:
import { SignPage } from './style';
import { signInWithGooglePopup } from '../../services/firebase';

function SignIn() {
  const handleGoogleLogin = async () => {
    try {
      const res = await signInWithGooglePopup();
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <SignPage>
      <h1>Página de login/cadastro</h1>
      <div className="forms-container">
        <p>TODO: formulaários</p>
        <button type="button" onClick={handleGoogleLogin}>
          login
        </button>
      </div>
    </SignPage>
  );
}

export default SignIn;
