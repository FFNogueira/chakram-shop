import React from 'react';
// react-spinners:
import ScaleLoader from 'react-spinners/ScaleLoader';
// axios:
import axios from 'axios';
// PropTypes:
import PropTypes from 'prop-types';
// estilo deste componente:
import { List } from './style';
// importa o contexto do carrinho de compras:
import { shoppingCartContext } from '../../services/context/shoppingCart';
// função para alterações no carrinho de compras:
import manageShoppingCartItens from '../../modules/manageShoppingCartItens';

function ProductList({ itemType, dataURL }) {
  // variáveis de estado:
  const [list, setList] = React.useState([]);
  const { cartItens, setCartItens } = React.useContext(shoppingCartContext);

  React.useEffect(() => {
    async function getListData() {
      try {
        // tenta obter lista de produtos:
        const { data } = await axios({
          method: 'get',
          url: dataURL,
        });
        // se obteve a lista com sucesso:
        setList(data);
      } catch (err) {
        console.log(`Erro ao obter lista de [${itemType}]`);
      }
    }
    getListData();
  }, []);

  return (
    <List>
      <h2>{itemType}</h2>
      {list.length > 0 ? (
        <div className="item-list">
          {list.map((item) => {
            return (
              <div key={item.name}>
                <div className="item">
                  <img
                    className="item-img"
                    src={item.imageUrl}
                    alt={item.name}
                  />
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
      ) : (
        <ScaleLoader
          className="scaleLoader"
          width="6px"
          height="52px"
          color="#363636"
        />
      )}
    </List>
  );
}

ProductList.propTypes = {
  dataURL: PropTypes.string.isRequired,
  itemType: PropTypes.string.isRequired,
};

export default ProductList;
