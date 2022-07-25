import React from 'react';
// estilos desta Página
import { Page } from './style';
// contexto do carrinho de compras:
import { shoppingCartContext } from '../../services/context/shoppingCart';

function Cart() {
  const { cartItens, setCartItens } = React.useContext(shoppingCartContext);

  return <Page>TO DO</Page>;
}

export default Cart;
