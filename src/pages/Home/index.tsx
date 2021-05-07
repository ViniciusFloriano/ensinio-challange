import React from 'react';

import PersonImage from '../../assets/images/person.png';
import BackgroundIcons from '../../components/BackgroundIcons';
import Container from '../../components/Container';
import Heading from '../../components/Heading';
import HeaderContainer from './styles';

const Home: React.FC = () => (
  <HeaderContainer>
    <BackgroundIcons />
    <Container>
      <div>
        <Heading >PLATAFORMA ALL IN ONE</Heading>
      </div>
      <img alt="person" src={PersonImage} />
    </Container>
  </HeaderContainer>
);

export default Home;
