import React from 'react';

import { Link } from 'react-router-dom';
import {
  Container,
  Topside,
  Logo,
  MenuButton,
  IconHome,
  IconUsers,
  IconNotification,
  IconProfile,
  IconConfiguration,
  Botside,
  Avatar,
  ProfileData,
  BottomMenu,
  IconLogout,
  IconLocal,
  IconSetor,
} from './styles';
import logo from '../../img/logo.png';
import { useAuth } from '../../hooks/auth';

const Menu: React.FC = () => {
  const { signOut } = useAuth();
  const { user } = useAuth();
  return (
    <Container>
      <Topside>
        <Logo>
          <img src={logo} alt="logo" />
        </Logo>
        <Link to="/">
          <MenuButton>
            <IconHome />
            <span>Página Inicial</span>
          </MenuButton>
        </Link>

        <Link to="/list-user">
          <MenuButton>
            <IconUsers />
            <span>Usuários</span>
          </MenuButton>
        </Link>

        <MenuButton>
          <IconNotification />
          <span>Notificações</span>
        </MenuButton>

        <Link to="/list-profile">
          <MenuButton>
            <IconProfile />
            <span>Perfis</span>
          </MenuButton>
        </Link>

        <Link to="/list-local">
          <MenuButton>
            <IconLocal />
            <span>Locais</span>
          </MenuButton>
        </Link>

        <Link to="/list-sector">
          <MenuButton>
            <IconSetor />
            <span>Setores</span>
          </MenuButton>
        </Link>

        <MenuButton>
          <IconConfiguration />
          <span>Configurações</span>
        </MenuButton>

        <MenuButton type="button" onClick={() => signOut()}>
          <IconLogout />
          <span>Sair</span>
        </MenuButton>

      </Topside>
      <Botside>
        <Avatar />
        <ProfileData>
          <strong>{user.data.name}</strong>
          <span>{user.email}</span>
        </ProfileData>
      </Botside>
      <BottomMenu>
        <IconHome className="active" />
        <IconUsers />
        <IconNotification />
        <IconProfile />
        <IconConfiguration />
        <IconLogout />
      </BottomMenu>
    </Container>
  );
};

export default Menu;
