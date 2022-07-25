import React from 'react';
import { BsCart2 } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { shoppingCartContext } from '../../services/context/shoppingCart';
// estilos deste componente:
import { ShoppingCartContainer } from './style';
// componentes:
import CartMiniCards from '../CartMiniCards';

function ShoppingCartPreview() {
  const [display, setDisplay] = React.useState('none');
  const { cartItens } = React.useContext(shoppingCartContext);

  return (
    <ShoppingCartContainer>
      <button
        type="button"
        onClick={() => {
          setDisplay(display === 'none' ? 'flex' : 'none');
        }}
      >
        <BsCart2 className="shopping-cart-icon" />
        <span className="number-of-itens">
          {cartItens.reduce((acc, item) => acc + item.units, 0)}
        </span>
      </button>
      <div className="cart-preview-window" style={{ display }}>
        <CartMiniCards cartItens={cartItens} />
        <Link to="/cart">Ir para o carrinho</Link>
      </div>
    </ShoppingCartContainer>
  );
}

export default ShoppingCartPreview;
