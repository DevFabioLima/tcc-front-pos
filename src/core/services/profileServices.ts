/* eslint-disable no-unused-expressions */
/* eslint-disable @typescript-eslint/no-explicit-any */
import api from './api';
import { IHandleCreateProfile } from '../ts/interfaces/profile';

export const getProfilesForSelect = async (): Promise<any> => {
  const response = await api.get('/profiles');
  const profilesData = response.data.profiles.map((item: any) => ({
    id: item.id,
    label: item.name,
  }));
  return profilesData;
};

function actionsDePara(data: IHandleCreateProfile): Array<number> {
  const actions: Array<number> = [];
  data.actionInsertUser && actions.push(1);
  data.actionUpdateUser && actions.push(2);
  data.actionDeleteUser && actions.push(3);
  data.actionListUser && actions.push(4);
  data.actionInsertPlanAction && actions.push(5);
  data.actionUpdatePlanAction && actions.push(6);
  data.actionListPlanAction && actions.push(7);
  data.actionDeletePlanAction && actions.push(8);
  data.actionInsertProfile && actions.push(9);
  data.actionUpdateProfile && actions.push(10);
  data.actionListProfile && actions.push(11);
  data.actionDeleteProfile && actions.push(12);

  return actions;
}

export const createProfile = async (data: IHandleCreateProfile): Promise<any> => {
  const actions = actionsDePara(data);
  const { name } = data;
  const response = await api.post('/profiles', {
    name,
    actions,
  });
  return response;
};

export const getProfilesForTable = async (): Promise<any> => {
  const response = await api.get('/profiles/custom');
  return response.data.profiles;
};
