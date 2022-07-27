import React from 'react';
// react-spinner:
import MoonLoader from 'react-spinners/MoonLoader';
// Estilos desta página:
import { Page } from './style';
// Componentes:
import ProductList from '../../components/ProductList';
// serviço Firestore:
import { getAllDocs } from '../../services/firebase';

function Products() {
  const [itemsLists, setItemsLists] = React.useState([]);

  // Carrega as listas de produtos do banco de dados:
  React.useEffect(() => {
    async function getItemsLists() {
      const listsData = await getAllDocs('categories');
      if (!listsData.errors) setItemsLists(listsData);
    }
    getItemsLists();
  }, []);

  return (
    <Page>
      {itemsLists.length > 0 ? (
        itemsLists.map((itemList) => {
          return <ProductList key={itemList.title} itemList={itemList} />;
        })
      ) : (
        <div className="loader-container">
          <MoonLoader size="150px" />
        </div>
      )}
    </Page>
  );
}

export default Products;
