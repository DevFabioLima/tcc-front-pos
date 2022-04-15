/* eslint-disable react/jsx-props-no-spreading */
import React, { useCallback } from 'react';
import { FiUser } from 'react-icons/fi';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { useForm } from 'react-hook-form';
import { Container, Content, Form } from './styles';
import Input from '../../../components/Input';
import { IHandleCreateSector } from '../../../ts/interfaces/sector';
import { useToast } from '../../../hooks/toast';
import { createSector } from '../../../services/sectorServices';

const CreateSetor: React.FC = () => {
  const { addToast } = useToast();

  const schema = Yup.object().shape({
    name: Yup.string()
      .required('Nome do sector é obrigatório'),
  });

  const { handleSubmit, register, formState: { errors } } = useForm<IHandleCreateSector>({
    resolver: yupResolver(schema),
  });

  const onSubmit = useCallback(
    async (request: IHandleCreateSector) => {
      try {
        await createSector(request);
        addToast({
          type: 'success',
          title: 'Novo setor criado',
        });
        setTimeout(() => {
          window.location.reload();
        }, 2000);
      } catch (err) {
        addToast({
          type: 'error',
          title: 'Erro ao criar setor',
          description: 'Ocorreu um erro ao inserir novo setor, revise os dados e tente novamente',
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
            <Input {...register('name')} fontSize="16px" icon={FiUser} type="text" placeholder="Nome do Setor" name="name" erros={!!errors.name} />
          </div>
          <div>
            <button type="submit">Prosseguir</button>
          </div>
        </Form>
      </Content>
    </Container>

  );
};

export default CreateSetor;
