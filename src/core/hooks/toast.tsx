/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/no-cycle */
import React, {
  createContext, useContext, useCallback, useState,
} from 'react';

import { v4 as uuidv4 } from 'uuid';
import ToastContainer from '../components/ToastContainer';

interface IToastContextData {
  addToast(messages: Omit<IToastMessage, 'id'>): void;
  removeToast(id: string): void;
}

export interface IToastMessage {
  id: string;
  type?: 'success' | 'error' | 'info';
  title: string;
  description?: string;
}

const ToastContext = createContext<IToastContextData>({} as IToastContextData);

const ToastProvider: React.FC = ({ children }) => {
  const [messages, setMessages] = useState<IToastMessage[]>([]);

  const addToast = useCallback(({ type, title, description }: Omit<IToastMessage, 'id'>) => {
    const id = uuidv4();
    const toast = {
      id,
      type,
      title,
      description,
    };

    setMessages((oldMessages) => [...oldMessages, toast]);
  }, []);

  const removeToast = useCallback((id: string) => {
    setMessages(((oldMessages) => oldMessages.filter((message) => message.id !== id)));
  }, []);

  return (
    <ToastContext.Provider value={{ addToast, removeToast }}>
      {children}
      <ToastContainer messages={messages} />
    </ToastContext.Provider>
  );
};

function useToast(): IToastContextData {
  const context = useContext(ToastContext);

  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }

  return context;
}

export { ToastProvider, useToast };
