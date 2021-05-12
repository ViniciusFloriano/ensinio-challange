import styled from 'styled-components';

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  z-index: 100000;
  postion absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  h1 {
    max-width: 300px;
    text-align: center;
  }
  h1:last-child {
    margin-top: 25px;
  }
`;

export default Container;
