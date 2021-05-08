import React, { useEffect, useState } from 'react';

import PersonImage from '../../assets/images/person.png';
import BackgroundIcons from '../../components/BackgroundIcons';
import Container from '../../components/Container';
import Heading from '../../components/Heading';
import HomeLeftContainer from '../../components/HomeLeftContainer';
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
          <HomeLeftContainer />
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
