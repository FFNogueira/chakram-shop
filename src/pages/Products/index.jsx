import React from 'react';
// Estilos desta página:
import { Page } from './style';
// Componentes:
import ProductList from '../../components/ProductList';

function Products() {
  const listsProps = [
    // objetos com as propriedades de cada lista de produtos:
    { itemType: 'BONÉS/CHAPÉIS', dataURL: '/shop-data.json' },
  ];

  return (
    <Page>
      {listsProps.map((prop) => {
        return (
          <ProductList
            key={prop.itemType}
            itemType={prop.itemType}
            dataURL={prop.dataURL}
          />
        );
      })}
    </Page>
  );
}

export default Products;
