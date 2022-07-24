const manageShoppingCartItens = (
  cartItens,
  itemToBeHandled,
  removeItem = false,
) => {
  let newCart = [...cartItens];
  // procura se o item já existe no carrinho:
  const itemIndex = newCart.findIndex(
    (item) => item.itemName === itemToBeHandled.itemName,
  );
  // SE O ITEM AINDA NÃO EXISTE NO CARRINHO:
  if (itemIndex < 0) {
    newCart.push({
      itemName: itemToBeHandled.itemName,
      imgURL: itemToBeHandled.imgURL,
      units: 1,
      unitPrice: itemToBeHandled.unitPrice,
    });
  }
  // SENÃO, SE O ITEM JÁ EXISTE:
  // se deseja remover uma unidade:
  else if (removeItem) {
    newCart[itemIndex].units -= 1;
    // limpe do carrinho todo produto com 0 unidades:
    newCart = newCart.filter((item) => item.units > 0);
  } else {
    // senão, adicione uma unidade:
    newCart[itemIndex].units += 1;
  }
  console.log(newCart); // DEBUG!!!!!!!!!
  // salva carrinho no localStorage:
  window.localStorage.setItem('cartItens', JSON.stringify(newCart));
  // muda o estado do carrinho:
  return newCart;
};

export default manageShoppingCartItens;
