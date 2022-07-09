import React from 'react';

// importa styled component específico para esta página:
import { Page } from './styled';
// Componentes desta Página:
import Category from '../../components/category';
import Logo from '../../components/Logo';

function Home() {
  const categories = [
    {
      name: 'bonés/chapéis',
      className: 'bones-chapeis',
      imgSrc:
        'https://images.pexels.com/photos/954254/pexels-photo-954254.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      name: 'masculino',
      className: 'masculino',
      imgSrc: 'https://i.ibb.co/R70vBrQ/men.png',
    },
    {
      name: 'feminino',
      className: 'feminino',
      imgSrc:
        'https://images.pexels.com/photos/1144834/pexels-photo-1144834.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      name: 'jaquetas',
      className: 'jaquetas',
      imgSrc:
        'https://images.unsplash.com/photo-1489286696299-aa7486820bd5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80',
    },
    {
      name: 'calçados',
      className: 'calcados',
      imgSrc:
        'https://cdn.pixabay.com/photo/2015/10/29/01/24/shoes-1011596_960_720.jpg',
    },
  ];

  return (
    <Page>
      <Logo />
      <div className="categories">
        {categories.map((properties) => {
          return <Category key={properties.name} properties={properties} />;
        })}
      </div>
    </Page>
  );
}

export default Home;
