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

  const handleCloseCartPreview = (e) => {
    const isInsideCartPreview = e.target.closest('.cart-preview-window');
    const isCartButton = e.target.closest('.cart-button');
    if (!isInsideCartPreview && !isCartButton) setDisplay('none');
  };

  React.useEffect(() => {
    document.addEventListener('click', handleCloseCartPreview);
    return () => {
      document.removeEventListener('click', handleCloseCartPreview);
    };
  }, []);

  return (
    <ShoppingCartContainer>
      <button
        type="button"
        className="cart-button"
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
        <Link
          to="/cart"
          onClick={() => {
            setDisplay('none');
          }}
        >
          Ir para o carrinho
        </Link>
      </div>
    </ShoppingCartContainer>
  );
}

export default ShoppingCartPreview;
