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
  }

  @media (max-width: 1120px) {
    height: 140vh;
    min-height: 980px;
    max-height: 1366px;
    > div {
      flex-direction: column;

      #person {
        align-self: center;
        width: 60%;
        max-width: 600px;
      }
    }
  }

  @media (max-width: 900px) {
    height: 130vh;
    max-height: 1124px;
  }

  @media (max-width: 720px) {
    height: 120vh;
    max-height: 1025px;
    > div {
      #person {
        width: 100%;
      }
    }
  }

  @media (max-width: 520px) {
    height: 120vh;
    max-height: 825px;
  }
`;

export const MainContainer = styled('div')`
  width: 100%;
  height: 100%;
`;
