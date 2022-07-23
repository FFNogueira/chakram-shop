import React from 'react';
// axios:
import axios from 'axios';
// mensageiro toastify:
import sendToast from '../../modules/sendToast';
// Estilos desta página:
import { Page } from './style';
// Componentes:
import ProductList from '../../components/ProductList';

function Products() {
  // variáveis de estado:
  const [listsProps, setListsProps] = React.useState([
    // objetos com as propriedades de cada lista de produtos:
    { itemType: 'BONÉS/CHAPÉIS', dataURL: '/shop-data.json', list: [] },
  ]);

  // Obtendo os dados de cada lista:
  React.useEffect(() => {
    async function getListsOfProducts() {
      sendToast('loading', 'Carregando...');
      const listsLength = listsProps.length;
      let listsLeft = listsLength;
      while (listsLeft > 0) {
        try {
          // eslint-disable-next-line no-await-in-loop
          const { data } = await axios({
            method: 'get',
            url: listsProps[listsLength - listsLeft].dataURL,
            timeout: 5000,
          });
          // se dados foram obtidos com sucesso:
          const myList = [...listsProps];
          myList[listsLength - listsLeft].list = data;
          setListsProps(myList);
        } catch (err) {
          console.log(
            // eslint-disable-next-line prettier/prettier
            `Erro ao carregar lista [${listsProps[listsLength - listsLeft].itemType}]`,
          );
        } finally {
          listsLeft -= 1;
        }
      }
      sendToast();
    }
    getListsOfProducts();
  }, []);

  return (
    <Page>
      {listsProps.map((prop) => {
        return (
          <ProductList
            key={prop.itemType}
            itemType={prop.itemType}
            list={prop.list}
          />
        );
      })}
    </Page>
  );
}

export default Products;
