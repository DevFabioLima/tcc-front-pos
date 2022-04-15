/* eslint-disable @typescript-eslint/no-explicit-any */
import { IHandleCreateLocal, ILocal } from '../ts/interfaces/local';
import api from './api';

export const getLocalForTable = async (): Promise<Array<ILocal>> => {
  const response = await api.get('/locations');
  return response.data.locations;
};

export const createLocal = async (data: IHandleCreateLocal): Promise<any> => {
  const { name, sectorId } = data;
  const response = await api.post('/locations', {
    name,
    sectorId,
  });
  return response;
};
