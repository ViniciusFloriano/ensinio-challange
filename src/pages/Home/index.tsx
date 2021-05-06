import React from 'react';

import CertifiedImage from '../../assets/icons/icon-certified.svg';
import PlayImageClean from '../../assets/icons/icon-playlists-first.svg';
import PlayImage from '../../assets/icons/icon-playlists.svg';
import TranscriptionImage from '../../assets/icons/icon-transcription.svg';
import PersonImage from '../../assets/images/person.png';
import Container from '../../components/Container';
// import Heading from '../../components/Heading';
import HeaderContainer from './styles';

const Home: React.FC = () => (
  <HeaderContainer>
    <div id="background-icons">
      <img alt="Video" src={PlayImageClean} />
      <img alt="Video" src={PlayImageClean} />
      <img alt="Video" src={PlayImage} />
      <img alt="Video" src={CertifiedImage} />
      <img alt="Video" src={TranscriptionImage} />
    </div>
    <Container>
      <div>
        <h3>PLATAFORMA ALL IN ONE</h3>
      </div>
      <img alt="person" src={PersonImage} />
    </Container>
  </HeaderContainer>
);

export default Home;
