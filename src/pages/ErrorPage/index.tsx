import React from 'react';

import Heading from '../../components/Heading';
import Container from './styles';

const ErrorPage: React.FC = () => (
  <Container>
    <Heading color="primary" size="xlarge">
      Sorry
    </Heading>
    <Heading color="primary" size="large">
      : (
    </Heading>
    <Heading color="secondary" size="small">
      An error has occurred! Try to contact support ...
    </Heading>
  </Container>
);

export default ErrorPage;
