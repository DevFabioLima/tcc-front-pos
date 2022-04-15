/* eslint-disable camelcase */
import React, {
  useCallback, createContext, useState, useContext,
} from 'react';
import jwt_decode from 'jwt-decode';
import api from '../services/api';
import { IAction } from '../ts/interfaces/action';

interface IUser {
  email: string;
  photo?: string;
  data: IDataToken;
}

interface AuthState {
  token: string;
  user: IUser;
}

interface IDataToken {
  name: string;
  profileId: number;
  actions: Array<IAction>;
}

interface SignInCredentials {
  email: string;
  password: string;
}

interface AuthContextData {
  user: IUser;
  signIn(credentials: SignInCredentials): Promise<void>;
  signOut(): void;
  updateUser(user: IUser): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>(() => {
    const token = localStorage.getItem('@MasterBase:token');
    const user = localStorage.getItem('@MasterBase:user');

    if (token && user) {
      api.defaults.headers.authorization = `Bearer ${token}`;

      return { token, user: JSON.parse(user) };
    }

    return {} as AuthState;
  });

  const signIn = useCallback(async ({ email, password }) => {
    const response = await api.post('signin', {
      email,
      password,
    });

    const { token } = response.data;
    const user: IUser = jwt_decode(token);

    localStorage.setItem('@MasterBase:token', token);
    localStorage.setItem('@MasterBase:user', JSON.stringify(user));

    api.defaults.headers.authorization = `Bearer ${token}`;

    setData({ token, user });
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem('@MasterBase:token');
    localStorage.removeItem('@MasterBase:user');

    setData({} as AuthState);
  }, []);

  const updateUser = useCallback(
    (user: IUser) => {
      localStorage.setItem('@MasterBase:user', JSON.stringify(user));

      setData({
        token: data.token,
        user,
      });
    },
    [data.token],
  );

  return (
    <AuthContext.Provider
      value={{
        user: data.user, signIn, signOut, updateUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
}

export { AuthProvider, useAuth };
