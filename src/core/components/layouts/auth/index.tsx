import React from 'react';
import { Container, Wrapper } from './styles';
import Menu from '../../Menu';

export interface ILayout {
  component: React.ComponentType
}

const AuthLayout: React.FC<ILayout> = ({ component: Component }) => (
  <Container>
    <Wrapper>
      <Menu />
      <Component />
    </Wrapper>
  </Container>
);

export default AuthLayout;
