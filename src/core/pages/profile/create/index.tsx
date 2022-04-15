/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useCallback } from 'react';
import { FiUser } from 'react-icons/fi';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import {
  Container, Content, Form, ContentActions, Titles,
} from './styles';
import Input from '../../../components/Input';
import { createProfile } from '../../../services/profileServices';
import { useToast } from '../../../hooks/toast';
import { IHandleCreateProfile } from '../../../ts/interfaces/profile';

const CreateProfile: React.FC = () => {
  const { addToast } = useToast();

  const schema = Yup.object().shape({
    name: Yup.string()
      .required('Nome do perfil é obrigatório'),
  });
  const { handleSubmit, register, formState: { errors } } = useForm<IHandleCreateProfile>({
    resolver: yupResolver(schema),
  });

  const onSubmit = useCallback(
    async (request: IHandleCreateProfile) => {
      try {
        await createProfile(request);
        addToast({
          type: 'success',
          title: 'Novo perfil criado',
        });
        setTimeout(() => {
          window.location.reload();
        }, 2000);
      } catch (err) {
        addToast({
          type: 'error',
          title: 'Erro ao criar perfil',
          description: 'Ocorreu um erro ao inserir novo perfil, revise os dados e tente novamente',
        });
      }
    },
    [],
  );
  return (
    <Container>
      <Content>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <Input {...register('name')} fontSize="16px" icon={FiUser} type="text" placeholder="Nome Perfil" name="name" erros={!!errors.name} />
          </div>
          <Titles>
            <span>AÇÕES: </span>
            <span>LISTAR</span>
            <span>INSERIR</span>
            <span>ALTERAR</span>
            <span>EXCLUIR</span>
          </Titles>
          <ContentActions>
            <span>USERS</span>
            <input {...register('actionListUser')} type="checkbox" id="checkbox" name="actionListUser" value="4" />
            <input {...register('actionInsertUser')} type="checkbox" id="checkbox" name="actionInsertUser" value="1" />
            <input {...register('actionUpdateUser')} type="checkbox" id="checkbox" name="actionUpdateUser" value="2" />
            <input {...register('actionDeleteUser')} type="checkbox" id="checkbox" name="actionDeleteUser" value="3" />
          </ContentActions>
          <ContentActions>
            <span>AÇÕES</span>
            <input {...register('actionListPlanAction')} type="checkbox" id="checkbox" name="actionListPlanAction" value="7" />
            <input {...register('actionInsertPlanAction')} type="checkbox" id="checkbox" name="actionInsertPlanAction" value="5" />
            <input {...register('actionUpdatePlanAction')} type="checkbox" id="checkbox" name="actionUpdatePlanAction" value="6" />
            <input {...register('actionDeletePlanAction')} type="checkbox" id="checkbox" name="actionDeletePlanAction" value="8" />
          </ContentActions>
          <ContentActions>
            <span>PERFIL</span>
            <input {...register('actionListProfile')} type="checkbox" id="checkbox" name="actionListProfile" value="11" />
            <input {...register('actionInsertProfile')} type="checkbox" id="checkbox" name="actionInsertProfile" value="9" />
            <input {...register('actionUpdateProfile')} type="checkbox" id="checkbox" name="actionUpdateProfile" value="10" />
            <input {...register('actionDeleteProfile')} type="checkbox" id="checkbox" name="actionDeleteProfile" value="12" />
          </ContentActions>
          <div>
            <button type="submit">Prosseguir</button>
          </div>
        </Form>
      </Content>
    </Container>

  );
};

export default CreateProfile;
