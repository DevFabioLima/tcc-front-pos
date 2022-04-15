/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable import/no-cycle */
import React, { useEffect } from 'react';
import ErrorIcon from '@material-ui/icons/Error';
import InfoIcon from '@material-ui/icons/Info';
import CheckIcon from '@material-ui/icons/Check';
import CloseIcon from '@material-ui/icons/Close';
import { Toast as StyToast } from './styles';
import { IToastMessage, useToast } from '../../../hooks/toast';

interface IToastProps {
  toast: IToastMessage;
  style: object;
}

const icons = {
  info: <InfoIcon />,
  error: <ErrorIcon />,
  success: <CheckIcon />,
};

const Toast: React.FC<IToastProps> = ({ toast, style }) => {
  const { removeToast } = useToast();

  useEffect(() => {
    const timer = setTimeout(() => {
      removeToast(toast.id);
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, [removeToast, toast.id]);

  return (
    <StyToast key={toast.id} hasDescription={!!toast.description} type={toast.type} style={style}>
      {icons[toast.type || 'info']}

      <div>
        <strong>{toast.title}</strong>
        {toast.description && <p>{toast.description}</p>}
      </div>

      <button onClick={() => removeToast(toast.id)} type="button">
        <CloseIcon />
      </button>
    </StyToast>
  );
};

export default Toast;
