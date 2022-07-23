import styled from 'styled-components';

export const List = styled.section`

h2{
  text-align: left;
  font-size: medium;
  margin-bottom: 10px;
  font-size: larger;
  padding-left: 20px;
}

.item-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, 205px);
  gap: 15px;
  justify-items: center;
  justify-content: center;
  padding-bottom: 15px;

  .item {
    position: relative;
    display: flex;
    flex-direction: column;

    .item-img {
    width: 200px;
    height: 230px;
    object-fit: cover;
    object-position: center;
  }

  .item-desc {
    padding-top: 5px;
    display: flex;
    justify-content: space-between;
    font-family: 'Orbitron',sans-serif;
    font-weight: 400;
    font-size: 15px;
  }

  .add-to-cart-link{
    display: none;
    font-family: 'Open Sans',sans-serif;
    color: floralwhite;
    text-align: center;
    position: absolute;
    bottom: 60px;
    width: 120px;
    padding: 5px;
    align-self: center;
    background-color: #00000091;
    border: 1px solid floralwhite;
  }

  &:hover{

    .item-img{
      opacity: 0.8;
    }

    .add-to-cart-link{
    display: block;
  }
  }
  }
}

`;
