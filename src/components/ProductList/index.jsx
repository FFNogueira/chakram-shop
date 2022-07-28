import React from 'react';
// PropTypes:
import PropTypes from 'prop-types';
// estilo deste componente:
import { List } from './style';
// importa o contexto do carrinho de compras:
import { shoppingCartContext } from '../../services/context/shoppingCart';
// função para alterações no carrinho de compras:
import manageShoppingCartItens from '../../modules/manageShoppingCartItens';
// mensageiro toastify:
import sendToast from '../../modules/sendToast';

function ProductList({ itemList }) {
  const { title, items, id } = itemList;
  const { cartItens, setCartItens } = React.useContext(shoppingCartContext);

  return (
    <List>
      <h2 id={id}>{title}</h2>
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
                    sendToast(
                      'success',
                      `"${item.name}" adicionado ao carrinho`,
                      2000,
                    );
                  }}
                >
                  Adicionar ao carrinho
                </button>
              </div>
              <div className="item-desc">
                <hr />
                <p className="item-name">{item.name}</p>
                <p className="item-price">{`R$ ${item.price}`}</p>
              </div>
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
    id: PropTypes.string,
  }).isRequired,
};

export default ProductList;
