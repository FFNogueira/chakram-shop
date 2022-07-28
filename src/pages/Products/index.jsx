import React from 'react';
import { useLocation } from 'react-router-dom';
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
  const { hash } = useLocation();
  // Carrega as listas de produtos do banco de dados:
  React.useEffect(() => {
    async function getItemsLists() {
      // tenta obter as listas de produtos:
      const listsData = await getAllDocs('categories');
      // se obteve os dados com sucesso:
      if (!listsData.errors) {
        // carrege os produtos na página:
        setItemsLists(listsData);
        // se deseja fazer scroll para uma categoria de produto específica:
        if (hash !== '') {
          // espera 300ms (carregamento dos produtos na página):
          setTimeout(() => {
            const productCategory = document.querySelector(hash);
            if (productCategory) {
              productCategory.scrollIntoView();
            }
          }, 200);
        }
      }
    }
    getItemsLists();
  }, [hash]);

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
