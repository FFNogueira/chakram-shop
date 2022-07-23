import styled from 'styled-components';

export const LoadingPage = styled.div`

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  z-index: 5;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: linear-gradient(90deg, rgba(199 210 249) 0%, rgba(206,239,246,1) 50%, rgba(221,244,245,1) 100%);

  svg {
    width: 150px;
    height: 150px;
    padding: 10px;
  }

  .loader {
    text-align: center;
  }
`;
