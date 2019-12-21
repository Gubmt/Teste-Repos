import React from 'react';
import { Image } from 'react-native';

import logo from '~/assets/logosmall.png';

import { Container, Textlogo } from './styles';

export default function Header() {
  return (
    <Container>
      <Image source={logo} />

      <Textlogo>Repositórios</Textlogo>
    </Container>
  );
}
