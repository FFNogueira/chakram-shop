import React from 'react';
import { BsHandbag } from 'react-icons/bs';
import { Link } from 'react-router-dom';
// estilos deste componente:
import { ShoppingCartContainer } from './style';

function ShoppingCartPreview() {
  const [display, setDisplay] = React.useState('none');

  return (
    <ShoppingCartContainer>
      <button
        type="button"
        onClick={() => {
          setDisplay(display === 'none' ? 'flex' : 'none');
        }}
      >
        <BsHandbag className="shopping-bag-icon" />
      </button>
      <div className="cart-preview-window" style={{ display }}>
        <div className="cart-added-itens">to do</div>
        <Link to="/cart">Ir para o carrinho</Link>
      </div>
    </ShoppingCartContainer>
  );
}

export default ShoppingCartPreview;
