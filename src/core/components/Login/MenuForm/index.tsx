/* eslint-disable eqeqeq */
/* eslint-disable react/jsx-props-no-spreading */
import React, {
  useCallback,
  useState,
} from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { FiMail, FiLock } from 'react-icons/fi';
import { useHistory } from 'react-router';
import {
  Container, NavigationMobile, Form,
} from './styles';

import Input from '../../Input';
import { useAuth } from '../../../hooks/auth';

interface ISignInFormData {
  email: string,
  password: string;
}

const MenuForm: React.FC = () => {
  const { signIn } = useAuth();
  const history = useHistory();

  function handleToggle(): void {
    if (window.toggleActiveMenu) window.toggleActiveMenu();
  }

  const [recoverPwd, setRecoverPwd] = useState(false);
  const [errorLogin, setErrorLogin] = useState(false);
  const [errorMessageLogin, setErrorMessageLogin] = useState('Falha na conexão, tente novamente');

  const schema = Yup.object().shape({
    email: Yup.string()
      .required('E-mail obrigatório')
      .email('Digite um e-mail válido'),
    password: Yup.string().required('Senha obrigatória'),
  });

  const { handleSubmit, register, formState: { errors } } = useForm<ISignInFormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = useCallback(
    async (request: ISignInFormData) => {
      try {
        await signIn({
          email: request.email,
          password: request.password,
        });
        history.push('/main');
      } catch (err) {
        if (err.response.status == 401) {
          setErrorLogin(true);
          setErrorMessageLogin('Email e ou senha inválidos');
        }
      }
    },
    [signIn],
  );

  return (
    <Container>
      <NavigationMobile>
        <h1>
          <span>MASTER BASE</span>
        </h1>

        <button type="button" className="action--close" onClick={handleToggle}>X</button>
      </NavigationMobile>
      {!recoverPwd
        ? (
          <Form onSubmit={handleSubmit(onSubmit)}>
            <span className="title">Login</span>
            <Input {...register('email')} fontSize="16px" icon={FiMail} type="email" placeholder="E-mail" name="email" />
            <Input {...register('password')} fontSize="16px" icon={FiLock} type="password" placeholder="Password" name="password" />
            <p>{errors.password?.message}</p>
            { errorLogin && <p>{errorMessageLogin}</p> }
            <button type="submit">Prosseguir</button>
            <button className="recover-pwd" type="button" onClick={() => setRecoverPwd(true)}>Recuperar senha</button>
          </Form>
        )
        : (
          <Form>
            <span className="title">Recuperar senha</span>
            <Input fontSize="16px" icon={FiMail} type="email" placeholder="E-mail de recuperação" name="email" />
            <button type="button" onClick={() => setRecoverPwd(false)}>Enviar</button>

          </Form>
        )}
    </Container>
  );
};

export default MenuForm;
