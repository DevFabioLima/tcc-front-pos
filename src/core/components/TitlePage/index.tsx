import React from 'react';

import { Container } from './styles';

interface ITitlePage {
  title: string,
}

const TitlePage: React.FC<ITitlePage> = ({ title }) => (
  <Container>{title}</Container>
);

export default TitlePage;
