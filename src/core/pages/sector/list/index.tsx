/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React, { useEffect, useState } from 'react';
import StyModal from '../../../components/Modal';
import Table from '../../../components/Table';
import TitlePage from '../../../components/TitlePage';
import { getSectorForTable } from '../../../services/sectorServices';
import { ISector } from '../../../ts/interfaces/sector';
import CreateSetor from '../create';

import { Container, Content, StyButton } from './styles';

const listSetor: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [rows, setRows] = useState<Array<ISector>>();

  const columns = [
    { value: 'Nome' },
    { value: 'Editar' },
    { value: 'Desativar' },
  ];

  useEffect(() => {
    async function getData() {
      const sectorsData = await getSectorForTable();
      setRows(sectorsData);
    }
    getData();
  }, []);

  return (
    <Container>
      <TitlePage title="Lista Setores" />
      <Content>
        <Table columns={columns} rowsSector={rows} />
      </Content>
      <StyButton>
        <button type="button" onClick={() => setIsVisible(!isVisible)}>Criar Setor</button>
      </StyButton>
      {
        isVisible && <StyModal page={CreateSetor} isVisible />
      }
    </Container>
  );
};

export default listSetor;
