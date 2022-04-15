/* eslint-disable @typescript-eslint/no-explicit-any */
import { IHandleCreateUser, IUser, IUserSelect } from '../ts/interfaces/users';
import api from './api';

export const getUsersForTable = async (): Promise<Array<IUser>> => {
  const response = await api.get('/users');
  return response.data;
};

export const getUsersForSelect = async (): Promise<Array<IUserSelect>> => {
  const response = await api.get('/users');
  const UsersData = response.data.map((item: IUser) => ({
    id: item.id,
    label: `${item.firstName} ${item.lastName}`,
  }));
  return UsersData;
};

export const createUser = async (data: IHandleCreateUser): Promise<any> => {
  const {
    firstName, lastName, email, password, sectorId, profileId, bossId,
  } = data;
  const response = await api.post('/users', {
    firstName,
    lastName,
    email,
    password,
    sectorId,
    profileId,
    bossId,
  });
  return response;
};
