/* eslint-disable @typescript-eslint/no-explicit-any */
import api from '../api';

export const getProfilesForSelect = async (): Promise<any> => {
  const response = await api.get('/profiles');
  const profilesData = response.data.profiles.map((item: any) => ({
    id: item.id,
    label: item.name,
  }));
  return profilesData;
};
