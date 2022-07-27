import styled from 'styled-components';

export const Page = styled.section`
  max-width: 550px;
  margin: 10px auto 0 auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  .item-container{
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 10px;
    padding-top: 10px;
    width: 100%;
    border-top: 2px solid blue;

    &:first-child{
      border: none;
      padding-top: 0;
    }

    img{
      object-fit: cover;
      object-position: center;
      width: 180px;
      height: 207px;
    }

    button{
      padding: 0;
      background: none;
      margin: 0 7px;

      &.remove-from-cart{
        padding-top: 5px;
      }
    }

    .name-and-quantity{
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 125px;
      height: 60px;

      span{
        text-align: center;

        &.item-name{
          font-weight: 700;
          padding-bottom: 7px;
        }
      }

      .quantity{
        display: flex;
        align-items: center;
      }
    }

    svg{
          font-size: 20px;
        }
  }

  .empty-cart{
    display: flex;
    width: 100%;
    height: 50vh;
    text-align: center;
    justify-content: center;
    align-items: center;
    font-size: x-large;
    font-weight: 700;
  }

  .total-price{
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 10px 50px 20px 50px;
    font-family: 'Orbitron',sans-serif;
    font-size: large;
    border-top: 2px solid black;
  }

  @media (max-width: 640px) {
    max-width: 360px;

    .item-container{

      img{
        width: 120px;
        height: 138px;
      }
    }
  }

  @media (max-width: 480px) {

    .item-container{

      img{
        width: 100px;
        height: 115px;
      }
    }
  }
`;
