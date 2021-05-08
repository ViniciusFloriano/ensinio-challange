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
`;

export const MainContainer = styled('div')`
  width: 100%;
  height: 100%;
`;
