import styled from 'styled-components';

const Container = styled('div')`
  height: 100vh;
  max-height: 900px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 1.5rem;

  #header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    > h3 {
      text-transform: uppercase;
      display: flex;
      align-items: center;
      justify-content: center;

      img {
        margin-right: 15px;
      }
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
    a {
      display: flex;
      align-items: center;
      justify-content: center;

      img {
        margin-left: 20px;
      }
    }
    p {
      display: flex;
      align-items: center;

      img {
        margin-right: 1.5rem;
      }
    }
  }

  @media (max-width: 720px) {
    #cards {
      flex-direction: column;
      align-items: center;
      > div {
        margin-bottom: 2.5rem;
      }
      > div:last-child {
        margin-bottom: 1rem;
      }
    }
  }
`;

export default Container;
