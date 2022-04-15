import React from 'react';
import { IUser } from '../../ts/interfaces/users';
import { IProfile } from '../../ts/interfaces/profile';

import {
  Container, TableSty, Column, Button,
} from './styles';
import { ILocal } from '../../ts/interfaces/local';
import { ISector } from '../../ts/interfaces/sector';

interface IColumns {
  value: string,
  width?: string
}

interface ITable {
  columns: Array<IColumns>,
  rowsUser?: Array<IUser> | undefined;
  rowsProfile?: Array<IProfile> | undefined;
  rowsLocal?: Array<ILocal> | undefined;
  rowsSector?: Array<ISector> | undefined;
}

const Table: React.FC<ITable> = ({
  columns, rowsUser, rowsProfile, rowsLocal, rowsSector,
}) => (
  <Container>
    <TableSty>
      <thead>
        <tr>
          {columns.map((column) => (
            <Column width={column.width}>{column.value}</Column>
          ))}
        </tr>
      </thead>
      <tbody>
        {rowsUser?.map((rowUser) => (
          <tr>
            <td>{`${rowUser.firstName} ${rowUser.lastName}` }</td>
            <td>{rowUser.email}</td>
            <td>{rowUser.sectorName}</td>
            <td>{rowUser.profileName}</td>
            <td><Button buttonColor="#F5912E" type="button">Editar</Button></td>
            <td><Button buttonColor="#FF4747" type="button">Desativar</Button></td>
          </tr>
        ))}
        {rowsProfile?.map((rowProfile) => (
          <tr>
            <td>{rowProfile.name }</td>
            <td>
              {
              rowProfile.actions.map((action) => (
                <tr>
                  <td className="without-line">{action}</td>
                </tr>
              ))
            }
            </td>
            <td>
              {
              rowProfile.users.map((user) => (
                <tr>
                  <td className="without-line">{user}</td>
                </tr>
              ))
            }
            </td>

            <td><Button buttonColor="#F5912E" type="button">Editar</Button></td>
            <td><Button buttonColor="#FF4747" type="button">Desativar</Button></td>
          </tr>
        ))}
        {rowsLocal?.map((rowLocal) => (
          <tr>
            <td>{rowLocal.name }</td>

            <td>{rowLocal.sectorName}</td>

            <td><Button buttonColor="#F5912E" type="button">Editar</Button></td>
            <td><Button buttonColor="#FF4747" type="button">Desativar</Button></td>
          </tr>
        ))}
        {rowsSector?.map((rowSector) => (
          <tr>
            <td>{rowSector.name}</td>
            <td><Button buttonColor="#F5912E" type="button">Editar</Button></td>
            <td><Button buttonColor="#FF4747" type="button">Desativar</Button></td>
          </tr>
        ))}
      </tbody>
    </TableSty>
  </Container>
);

export default Table;
