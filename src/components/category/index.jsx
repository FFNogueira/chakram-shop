import React from 'react';

import { get } from 'lodash';
// importa styled component específico para esta página:
import { CategoryItem } from './style';

function Category(props) {
  const { name, className, imgSrc } = get(props, 'properties', null);
  return (
    <CategoryItem
      className={className}
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
  );
}

export default Category;
