/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React, { useCallback, useEffect, useState } from 'react';
import { FiUser, FiMail, FiLock } from 'react-icons/fi';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { useForm } from 'react-hook-form';
import {
  Content, Form, ContentForm, StyleButton, ContentFormProfile,
} from './styles';
import Input from '../../../components/Input';
import SelectBox, { ISelectBoxValues } from '../../../components/Select';
import { getProfilesForSelect } from '../../../services/profileServices';
import { createUser, getUsersForSelect } from '../../../services/userServices';
import { IHandleCreateUser } from '../../../ts/interfaces/users';
import { useToast } from '../../../hooks/toast';
import { getSectorForSelect } from '../../../services/sectorServices';

const CreateUser: React.FC = () => {
  const { addToast } = useToast();

  const [sector, setSector] = useState<string>('');
  const [boss, setBoss] = useState<string>('');
  const [profile, setProfile] = useState<string>('');
  const [valuesProfile, setValuesProfile] = useState<ISelectBoxValues[]>();
  const [valuesSectors, setValuesSectors] = useState<ISelectBoxValues[]>();
  const [valuesBoss, setValuesBoss] = useState<ISelectBoxValues[]>();

  const handleChangeSector = (event: React.ChangeEvent<{ value: unknown }>) => {
    setSector(event.target.value as string);
  };

  const handleChangeBoss = (event: React.ChangeEvent<{ value: unknown }>) => {
    setBoss(event.target.value as string);
  };

  const handleChangeProfile = (event: React.ChangeEvent<{ value: unknown }>) => {
    setProfile(event.target.value as string);
  };

  const schema = Yup.object().shape({
    firstName: Yup.string()
      .required('Nome é obrigatório'),
    lastName: Yup.string()
      .required('Sobrenome é obrigatório'),
    email: Yup.string()
      .required('Email é obrigatório'),
    password: Yup.string()
      .required('Email é obrigatório'),
  });
  const { handleSubmit, register, formState: { errors } } = useForm<IHandleCreateUser>({
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    async function getSelectBox() {
      const profilesData = await getProfilesForSelect();
      setValuesProfile(profilesData);
      const sectorsData = await getSectorForSelect();
      setValuesSectors(sectorsData);
      const bossData = await getUsersForSelect();
      setValuesBoss(bossData);
    }
    getSelectBox();
  }, []);

  const onSubmit = useCallback(
    async (request: IHandleCreateUser) => {
      try {
        request.bossId = boss;
        request.sectorId = sector;
        request.profileId = profile;
        await createUser(request);
        addToast({
          type: 'success',
          title: 'Novo usuário criado',
        });
        setTimeout(() => {
          window.location.reload();
        }, 2000);
      } catch (err) {
        addToast({
          type: 'error',
          title: 'Erro ao criar usuário',
          description: 'Ocorreu um erro ao inserir novo usuário, revise os dados e tente novamente',
        });
      }
    },
    [boss, sector, profile],
  );

  return (

    <Content>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <ContentForm>
          <Input {...register('firstName')} fontSize="16px" icon={FiUser} type="text" placeholder="Nome" name="firstName" erros={!!errors.firstName} />
          <Input {...register('lastName')} fontSize="16px" icon={FiUser} type="text" placeholder="Sobrenome" name="lastName" erros={!!errors.lastName} />
        </ContentForm>
        <ContentForm>
          <Input {...register('email')} fontSize="16px" icon={FiMail} type="text" placeholder="Email" name="email" erros={!!errors.email} />
          <Input {...register('password')} fontSize="16px" icon={FiLock} type="password" placeholder="Senha" name="password" erros={!!errors.password} />
        </ContentForm>
        <ContentForm>
          <SelectBox value={sector} options={valuesSectors} name="Setor" handleChange={handleChangeSector} />
          <SelectBox value={boss} options={valuesBoss} name="Gestor" handleChange={handleChangeBoss} />
        </ContentForm>
        <ContentFormProfile>
          <SelectBox value={profile} options={valuesProfile} name="Perfil" handleChange={handleChangeProfile} />
        </ContentFormProfile>
        <StyleButton>
          <button type="submit">Prosseguir</button>
        </StyleButton>
      </Form>
    </Content>

  );
};

export default CreateUser;
