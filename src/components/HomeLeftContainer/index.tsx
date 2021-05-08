import React from 'react';

import MultiMedia from '../../assets/icons/multimedia.svg';
import PlayImage from '../../assets/icons/play.svg';
import Button from '../Button';
import Heading from '../Heading';
import Link from '../Link';
import Text from '../Text';
import Container from './styles';

const HomeLeftContainer: React.FC = () => (
  <Container>
    <Heading
      color="textSecondary"
      fontFamily="fontSecondary"
      fontWeight={500}
      letterSpacing="0.18rem"
      level={3}
      size="xsmall"
    >
      <img alt="MultiMedia" src={MultiMedia} />
      PLATAFORMA ALL IN ONE
    </Heading>
    <Heading fontWeight={500} lineHeight="1.1" size="large">
      Sua escola online poderosa e lucrativa
    </Heading>
    <Text size="small">
      Tenha sua própria escola online 100% white label com rede social,
      gamificação, clube de assinaturas, ecommerce e sistema EAD completo.
    </Text>
    <div>
      <Button>Começar agora</Button>
      <Link href="asd">
        <img alt="Play" src={PlayImage} />
        Ver vídeo
      </Link>
    </div>
  </Container>
);

export default HomeLeftContainer;
