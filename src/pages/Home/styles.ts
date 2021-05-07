import styled from 'styled-components';

export const HeaderContainer = styled('div')`
  width: 100%;
  height: 100vh;
  max-height: 900px;
  background: ${(props) => props.theme.colors.backgroundPrimary};

  > div {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    #person {
      align-self: flex-end;
      justify-self: flex-end;
      width: 45vw;
    }

    #left-container {
      z-index: 100;

      height: 100%;
      display: flex;
      justify-content: center;
      align-items: flex-start;
      flex-direction: column;
      width: 450px;
      padding-top: 5rem;
      margin-left: 1.5rem;

      h3 {
        display: flex;
        align-items: center;
        justify-content: center;
        img {
          margin-bottom: -2px;
          margin-right: 20px;
        }
      }

      h3,
      p {
        margin-bottom: 3rem;
      }
      h1 {
        margin-bottom: 3.2rem;
      }

      div {
        margin: 0;
        height: auto;
        display: flex;
        a:first-child {
          margin-right: 2.5rem;
        }
        a:last-child {
          display: flex;
          align-items: center;
          img {
            margin-right: 0.5rem;
          }
        }
      }
    }
  }
`;

export const ContentContainer = styled('div')`
  width: 100%;
  height: 100%;

  > div {
    padding: 6rem 0;
  }
`;
