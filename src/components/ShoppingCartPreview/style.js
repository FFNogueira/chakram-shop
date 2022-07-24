import styled from 'styled-components';

export const ShoppingCartContainer = styled.div`
    position: relative;

    button {
      margin-right: 0;

      .shopping-bag-icon {
      font-size: 30px;
    }
    }

    .cart-preview-window{
      display: flex;
      flex-direction: column;
      position: absolute;
      z-index: 1;
      right: 0px;
      width: 220px;
      height: 270px;
      background-color: #fffaf0f0;
      border: 2px solid black;
      padding: 10px;

      .cart-added-itens{
        height: 200px;
        margin: 0 auto auto auto;
        overflow-y: auto
      }

      a{
        font-family: 'Open Sans',sans-serif;
        font-weight: 700;
        margin: auto auto 0 auto;
        background-color: #181818;
        color: floralwhite;
        border: 2px solid #181818;
        padding: 7px 12px;

        &:hover{
          color: floralwhite;
        }
      }
    }
`;
