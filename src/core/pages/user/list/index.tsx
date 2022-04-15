/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React, { useEffect, useState } from 'react';

import {
  Container, Content, StyButton,
} from './styles';

import Table from '../../../components/Table';
import TitlePage from '../../../components/TitlePage';
import { IUser } from '../../../ts/interfaces/users';
import StyModal from '../../../components/Modal';
import CreateUser from '../create';
import { getUsersForTable } from '../../../services/userServices';

const ListUser: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [rows, setRows] = useState<Array<IUser>>();

  const columns = [
    { value: 'Nome' },
    { value: 'Email', width: '80px' },
    { value: 'Setor', width: '120px' },
    { value: 'Perfil' },
    { value: 'Editar' },
    { value: 'Desativar', width: '80px' },
  ];

  useEffect(() => {
    async function getData() {
      const usersData = await getUsersForTable();
      setRows(usersData);
    }
    getData();
  }, []);

  return (
    <Container>
      <TitlePage title="Lista Usuários" />
      <Content>
        <Table columns={columns} rowsUser={rows} />
      </Content>
      <StyButton>
        <button type="button" onClick={() => setIsVisible(!isVisible)}>Criar usuário</button>
      </StyButton>
      {
        isVisible && <StyModal page={CreateUser} isVisible />
      }
    </Container>
  );
};

export default ListUser;
