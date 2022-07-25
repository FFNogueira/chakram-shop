import styled from 'styled-components';

export const ShoppingCartContainer = styled.div`
    position: relative;

    button {
      margin-right: 0;
      position: relative;
      padding-right: 11px;

      .shopping-cart-icon {
      font-size: 30px;
    }

    .number-of-itens{
      position: absolute;
      font-size: 13px;
      font-weight: 700;
    }

    }

    .cart-preview-window{
      display: flex;
      flex-direction: column;
      position: absolute;
      z-index: 1;
      right: 0px;
      width: 240px;
      height: 290px;
      background-color: #fffaf0f0;
      border: 2px solid black;
      padding: 10px;

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
