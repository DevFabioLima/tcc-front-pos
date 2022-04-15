/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React, { useState, useEffect } from 'react';

import {
  Container, Content, StyButton,
} from './styles';

import Table from '../../../components/Table';
import TitlePage from '../../../components/TitlePage';
import StyModal from '../../../components/Modal';
import CreateProfile from '../create';
import { IProfile } from '../../../ts/interfaces/profile';
import { getProfilesForTable } from '../../../services/profileServices';

const ListProfile: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [rows, setRows] = useState<Array<IProfile>>();

  const columns = [
    { value: 'Nome' },
    { value: 'Ações' },
    { value: 'Usuários' },
    { value: 'Editar' },
    { value: 'Desativar' },
  ];

  useEffect(() => {
    async function getData() {
      const profilesData = await getProfilesForTable();
      setRows(profilesData);
    }
    getData();
  }, []);

  return (
    <Container>
      <TitlePage title="Lista Perfis" />
      <Content>
        <Table columns={columns} rowsProfile={rows} />
      </Content>
      <StyButton>
        <button type="button" onClick={() => setIsVisible(!isVisible)}>Criar perfil</button>
      </StyButton>
      {
        isVisible && <StyModal page={CreateProfile} isVisible />
      }
    </Container>
  );
};

export default ListProfile;
