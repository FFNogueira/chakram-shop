import React from 'react';
// PropTypes:
import PropTypes from 'prop-types';
// componente Link:
import { Link } from 'react-router-dom';
// importa styled component específico para esta página:
import { CategoryItem } from './style';

function Category({ properties }) {
  const { name, className, imgSrc } = properties;
  return (
    <Link to={`/products#${className}`} className={className}>
      <CategoryItem
        style={{
          backgroundImage: `url(${imgSrc})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}
      >
        <div className="text">
          <h2>{name}</h2>
          <p>comprar agora!</p>
        </div>
      </CategoryItem>
    </Link>
  );
}

Category.propTypes = {
  properties: PropTypes.shape({
    name: PropTypes.string,
    className: PropTypes.string,
    imgSrc: PropTypes.string,
  }).isRequired,
};

export default Category;
