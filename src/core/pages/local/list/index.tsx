/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React, { useEffect, useState } from 'react';
import StyModal from '../../../components/Modal';
import Table from '../../../components/Table';
import TitlePage from '../../../components/TitlePage';
import { getLocalForTable } from '../../../services/localServices';
import { ILocal } from '../../../ts/interfaces/local';
import CreateSector from '../create';

import { Container, Content, StyButton } from './styles';

const ListSector: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [rows, setRows] = useState<Array<ILocal>>();

  const columns = [
    { value: 'Nome', width: '120px' },
    { value: 'Setor' },
    { value: 'Editar' },
    { value: 'Desativar', width: '80px' },
  ];

  useEffect(() => {
    async function getData() {
      const localsData = await getLocalForTable();
      setRows(localsData);
    }
    getData();
  }, []);

  return (
    <Container>
      <TitlePage title="Lista de Locais" />
      <Content>
        <Table columns={columns} rowsLocal={rows} />
      </Content>
      <StyButton>
        <button type="button" onClick={() => setIsVisible(!isVisible)}>Criar Local</button>
      </StyButton>
      {
        isVisible && <StyModal page={CreateSector} isVisible />
      }
    </Container>
  );
};

export default ListSector;
