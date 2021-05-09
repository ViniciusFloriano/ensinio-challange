import styled from 'styled-components';

const Container = styled('div')`
  height: 100vh;
  max-height: 900px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  #header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    > h3 {
      text-transform: uppercase;
    }
  }

  > h1 {
    margin-top: 2rem;
  }

  #cards {
    width: 100%;
    margin: 4rem 0;
    display: flex;
    justify-content: space-between;

    div:last-child {
      margin-right: 15px;
    }
  }

  hr {
    border: none;
    border-top: 1px solid #e7e7e9;
  }

  #footer {
    margin-top: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    p {
      display: flex;
      align-items: center;

      img {
        margin-right: 1.5rem;
      }
    }
  }
`;

export default Container;
