/* eslint-disable @typescript-eslint/no-explicit-any */
import { IHandleCreateSector, ISector, ISectorForSelect } from '../ts/interfaces/sector';
import api from './api';

export const getSectorForSelect = async (): Promise<Array<ISectorForSelect>> => {
  const response = await api.get('/sectors');
  const SectorsData = response.data.sectors.map((item: ISector) => ({
    id: item.id,
    label: item.name,
  }));
  return SectorsData;
};

export const getSectorForTable = async (): Promise<Array<ISector>> => {
  const response = await api.get('/sectors');
  return response.data.sectors;
};

export const createSector = async (data: IHandleCreateSector): Promise<any> => {
  const { name } = data;
  const response = await api.post('/sectors', {
    name,
  });
  return response;
};
