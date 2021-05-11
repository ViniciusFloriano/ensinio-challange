import styled from 'styled-components';

const Container = styled('div')`
  height: 90vh;
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
    > h4 {
      text-align: right;
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

  @media (max-width: 1120px) {
    height: 140vh;
    max-height: 1366px;
  }
  @media (max-width: 900px) {
    height: 130vh;
    max-height: 1124px;
  }

  @media (max-width: 720px) {
    height: 120vh;
    max-height: 1025px;
    #cards {
      flex-direction: column;
      align-items: center;
      > div {
        margin-bottom: -3rem;
      }
      > div:last-child {
        margin-bottom: 1rem;
      }
    }
  }

  @media (max-width: 520px) {
    height: 120vh;
    max-height: 825px;
    #cards {
      > div {
        width: 200px;
      }
      div:nth-child(even) {
        align-self: flex-end;
        text-align: right;
      }
      div:nth-child(odd) {
        align-self: flex-start;
      }
    }
  }
`;

export default Container;
