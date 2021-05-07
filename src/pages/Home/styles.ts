import styled from 'styled-components';

const HeaderContainer = styled('div')`
  width: 100%;
  height: 100vh;
  max-height: 900px;
  background: ${(props) => props.theme.colors.backgroundPrimary};

  div {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    img {
      align-self: flex-end;
    }
  }
`;

export default HeaderContainer;
