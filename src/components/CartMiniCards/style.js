import styled from 'styled-components';

export const MiniCardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 220px;
  overflow-y: auto;

  .mini-card {
    display: flex;
    padding-bottom: 5px;
    align-items: center;

    img{
      object-fit: cover;
      object-position: center;
      height: 70px;
      width: 65px;
      padding-right: 5px;
    }

    .mini-card-info{
      text-align: start;
      font-size: 15px;

      p:nth-of-type(1){
        font-weight: 700;
      }
    }
  }

  .empty-cart{
      text-align: center;
      margin: auto 0;
      font-size: large;
    }
`;
