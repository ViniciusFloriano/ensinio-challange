import React from 'react';

import MultiMedia from '../../assets/icons/multimedia.svg';
import PersonImage from '../../assets/images/person.png';
import BackgroundIcons from '../../components/BackgroundIcons';
import Container from '../../components/Container';
import Heading from '../../components/Heading';
import Text from '../../components/Text';
import HeaderContainer from './styles';

const Home: React.FC = () => (
  <HeaderContainer>
    <BackgroundIcons />
    <Container>
      <div>
        <Heading
          color="textSecondary"
          fontFamily="fontSecondary"
          fontWeight={400}
          level={3}
          size="xsmall"
        >
          <img alt="MultiMedia" src={MultiMedia} />
          PLATAFORMA ALL IN ONE
        </Heading>
        <Heading>Sua escola online poderosa e lucrativa</Heading>
        <Text>
          Tenha sua própria escola online 100% white label com rede social,
          gamificação, clube de assinaturas, ecommerce e sistema EAD completo.
        </Text>
        <div>
          <button />
          <a />
        </div>
      </div>
      <img alt="person" src={PersonImage} />
    </Container>
  </HeaderContainer>
);

export default Home;
