import React from 'react';

import Heading from '../../components/Heading';
import Container from './styles';

const ErrorPage: React.FC = () => (
  <Container>
    <Heading color="primary" size="xlarge">
      Desculpe
    </Heading>
    <Heading color="primary" size="large">
      : (
    </Heading>
    <Heading color="secondary" size="small">
      Occoreu um erro! Tente entrar em contato com o suporte
    </Heading>
  </Container>
);

export default ErrorPage;
