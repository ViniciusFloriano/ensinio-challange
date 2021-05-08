import React, { useEffect, useState } from 'react';

import IconFolder from '../../assets/icons/icon-folder.svg';
import IconPlay from '../../assets/icons/icon-play.svg';
import IconTrilhas from '../../assets/icons/icon-trilhas.svg';
import RocketIcon from '../../assets/icons/rocket.svg';
import { ItemProps } from '../../interfaces/requestInterfaces';
import getItems from '../../services/requests';
import Card from '../Card';
import Heading from '../Heading';
import Link from '../Link';
import Text from '../Text';
import Container from './styles';

const icons = [IconTrilhas, IconPlay, IconFolder];

const HomeMainContainer: React.FC = () => {
  const [items, setItems] = useState<ItemProps[]>([]);

  useEffect(() => {
    getItems().then((newItems) => {
      setItems(newItems);
    });
  }, []);
  return (
    <Container>
      <div id="header">
        <Heading
          color="linkPrimaryOpacity"
          fontFamily="fontSecondary"
          fontWeight={500}
          letterSpacing="0.12rem"
          level={3}
          size="xsmall"
        >
          PENSAMOS EM CADA DETALHE
        </Heading>
        <Heading
          color="textTertiaryOpacity"
          fontWeight={400}
          level={3}
          size="xsmall"
        >
          Conheça alguns dos nossos recursos ⚡
        </Heading>
      </div>

      <Heading color="textTertiary" fontWeight={500} lineHeight="1.2">
        Queremos que o aluno se sinta confortável enquanto aprende
      </Heading>

      <div id="cards">
        {items.map((data) => (
          <Card
            description={data.description.pt}
            icon={icons[data.id - 1]}
            key={data.id}
            title={data.title.pt}
          />
        ))}
      </div>
      <hr />
      <div id="footer">
        <Text color="textTertiaryOpacity" fontWeight={500} size="xsmall">
          <img alt="Rocket" src={RocketIcon} />
          Veja todos os outros recursos disponíveis para te ajudar
        </Text>
        <Link
          color="linkPrimary"
          fontWeight={500}
          href="#vermais"
          size="xsmall"
        >
          Ver mais
        </Link>
      </div>
    </Container>
  );
};

export default HomeMainContainer;
