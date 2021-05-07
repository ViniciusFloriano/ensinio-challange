import styled from 'styled-components';

const HeaderContainer = styled('header')`
  position: fixed;
  width: 100%;
  height: 6rem;
  background: rgba(0, 0, 0, 0.03);
  backdrop-filter: blur(4px);
  --webkit-backdrop-filter: blur(4px);

  z-index: 2;

  display: flex;
  align-items: center;

`;

export default HeaderContainer;
