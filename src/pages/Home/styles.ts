import styled from 'styled-components';

const HeaderContainer = styled('div')`
  width: 100%;
  height: 100vh;
  max-height: 900px;
  background: ${(props) => props.theme.colors.backgroundPrimary};

  #background-icons {
    z-index: 1;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    left: 0;
    top: 50px;
    height: 50px;
    width: 100vw;

    img {
      position: absolute;
      height: 88.5px;
      width: 88.5px;
    }

    img:nth-child(1) {
      top: -5px;
      left: 5%;
    }

    img:nth-child(2) {
      top: -90px;
      left: 25%;
      transform: rotate(-14.5deg);
      height: 70.5px;
      width: 70.5px;
    }

    img:nth-child(3) {
      top: -5px;
      right: 6%;
    }

    img:nth-child(4) {
      top: 25px;
      left: 45%;
    }

    img:nth-child(5) {
      top: -35px;
      right: 31%;
      height: 70.5px;
      width: 70.5px;
    }
  }

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
