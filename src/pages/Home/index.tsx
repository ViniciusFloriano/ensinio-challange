import React, { useEffect, useState } from 'react';

import MultiMedia from '../../assets/icons/multimedia.svg';
import PlayImage from '../../assets/icons/play.svg';
import PersonImage from '../../assets/images/person.png';
import BackgroundIcons from '../../components/BackgroundIcons';
import Button from '../../components/Button';
import Container from '../../components/Container';
import Heading from '../../components/Heading';
import Link from '../../components/Link';
import Text from '../../components/Text';
import { ItemProps } from '../../interfaces/requestInterfaces';
import getItems from '../../services/requests';
import { ContentContainer, HeaderContainer } from './styles';

const Home: React.FC = () => {
  const [items, setItems] = useState<ItemProps[]>([]);

  useEffect(() => {
    getItems().then((newItems) => {
      setItems(newItems);
    });
  }, []);

  return (
    <>
      <HeaderContainer>
        <Container>
          <div id="left-container">
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
              gamificação, clube de assinaturas, ecommerce e sistema EAD
              completo.
            </Text>
            <div>
              <Button>Começar agora</Button>
              <Link href="asd">
                <img alt="Play" src={PlayImage} />
                Ver vídeo
              </Link>
            </div>
          </div>
          <img alt="person" id="person" src={PersonImage} />
        </Container>
        <BackgroundIcons />
      </HeaderContainer>
      <ContentContainer>
        <Container>
          <Heading
            color="textSecondary"
            fontFamily="fontSecondary"
            fontWeight={500}
            letterSpacing="0.18rem"
            level={3}
            size="xsmall"
          >
            PENSAMOS EM CADA DETALHE
          </Heading>
          <Heading color="textSecondary" fontWeight={500} lineHeight="1.2">
            Queremos que o aluno se sinta confortável enquanto aprende.
          </Heading>
          {items.map(({ id, title }) => (
            <div key={id}>{title.pt}</div>
          ))}
        </Container>
      </ContentContainer>
    </>
  );
};

export default Home;
