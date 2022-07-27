import React from 'react';
// PropTypes:
import PropTypes from 'prop-types';
// estilo deste componente:
import { List } from './style';
// importa o contexto do carrinho de compras:
import { shoppingCartContext } from '../../services/context/shoppingCart';
// função para alterações no carrinho de compras:
import manageShoppingCartItens from '../../modules/manageShoppingCartItens';

function ProductList({ itemList }) {
  const { title, items } = itemList;
  const { cartItens, setCartItens } = React.useContext(shoppingCartContext);

  return (
    <List>
      <h2>{title}</h2>
      <div className="item-list">
        {items.map((item) => {
          return (
            <div key={item.name}>
              <div className="item">
                <img className="item-img" src={item.imageUrl} alt={item.name} />
                <button
                  type="button"
                  className="add-to-cart-button"
                  onClick={() => {
                    setCartItens(
                      manageShoppingCartItens(cartItens, {
                        itemName: item.name,
                        imgURL: item.imageUrl,
                        unitPrice: item.price,
                      }),
                    );
                  }}
                >
                  Adicionar ao carrinho
                </button>
              </div>
              <p className="item-desc">
                <span>{item.name}</span> <span>{`R$ ${item.price}`}</span>
              </p>
            </div>
          );
        })}
      </div>
    </List>
  );
}

ProductList.propTypes = {
  itemList: PropTypes.shape({
    title: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.shape({})),
  }).isRequired,
};

export default ProductList;
