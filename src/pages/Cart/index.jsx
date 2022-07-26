import React from 'react';
// react-icons
import { FcPlus, FcMinus, FcCancel } from 'react-icons/fc';
// estilos desta Página
import { Page } from './style';
// contexto do carrinho de compras:
import { shoppingCartContext } from '../../services/context/shoppingCart';
// módulo de gerenciamento de itens do carrinho:
import manageShoppingCartItens from '../../modules/manageShoppingCartItens';

function Cart() {
  const { cartItens, setCartItens } = React.useContext(shoppingCartContext);

  const handleItemDecrease = (itemName, quantity = 1) => {
    setCartItens(manageShoppingCartItens(cartItens, { itemName }, quantity));
  };

  const handleItemIncrease = (itemName) => {
    setCartItens(manageShoppingCartItens(cartItens, { itemName }));
  };

  return (
    <Page>
      {cartItens.length > 0 ? (
        <>
          {cartItens.map(({ itemName, imgURL, units, unitPrice }) => {
            return (
              <div key={itemName} className="item-container">
                <img src={imgURL} alt={itemName} />
                <div className="name-and-quantity">
                  <span className="item-name">{itemName}</span>
                  <div className="quantity">
                    <button
                      type="button"
                      onClick={() => {
                        handleItemDecrease(itemName);
                      }}
                    >
                      <FcMinus />
                    </button>
                    <span>{units}</span>
                    <button
                      type="button"
                      onClick={() => {
                        handleItemIncrease(itemName);
                      }}
                    >
                      <FcPlus />
                    </button>
                  </div>
                </div>
                <span className="price">{`R$${units * unitPrice}`}</span>
                <button
                  className="remove-from-cart"
                  type="button"
                  onClick={() => {
                    handleItemDecrease(itemName, units);
                  }}
                >
                  <FcCancel />
                </button>
              </div>
            );
          })}
          <div className="total-price">
            <span>TOTAL</span>
            <span>{`R$${cartItens.reduce(
              (acc, item) => acc + item.units * item.unitPrice,
              0,
            )}`}</span>
          </div>
        </>
      ) : (
        <div className="empty-cart">
          <p>Seu carrinho está vazio :(</p>
        </div>
      )}
    </Page>
  );
}

export default Cart;
