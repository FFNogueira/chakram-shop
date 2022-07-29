import React from 'react';
// proptypes:
import PropTypes from 'prop-types';
// estilo deste componente:
import { MiniCardsContainer } from './style';

function CartMiniCards({ cartItens }) {
  return (
    <MiniCardsContainer>
      {cartItens.length ? (
        cartItens.map((item) => {
          return (
            <div key={item.itemName} className="mini-card">
              <img src={item.imgURL} alt={item.itemName} />
              <div className="mini-card-info">
                <p>{item.itemName}</p>
                <p>{`${item.units} x R$${item.unitPrice}`}</p>
              </div>
            </div>
          );
        })
      ) : (
        <p className="empty-cart">carrinho vazio</p>
      )}
    </MiniCardsContainer>
  );
}

CartMiniCards.propTypes = {
  cartItens: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default CartMiniCards;
