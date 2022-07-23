import React from 'react';
import { Link } from 'react-router-dom';
// PropTypes:
import PropTypes from 'prop-types';
// estilo deste componente:
import { List } from './style';

function ProductList({ itemType, list }) {
  return (
    <List>
      <h2>{itemType}</h2>
      <div className="item-list">
        {list.map((item) => {
          return (
            <div key={item.name} className="item">
              <img className="item-img" src={item.imageUrl} alt={item.name} />
              <Link to="/todo" className="add-to-cart-link">
                Adicionar ao carrinho
              </Link>
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
  list: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  itemType: PropTypes.string.isRequired,
};

export default ProductList;
