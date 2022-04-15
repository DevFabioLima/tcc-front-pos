/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React, { useCallback, useEffect, useState } from 'react';
import { ImLocation2 } from 'react-icons/im';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import {
  Content, Form, ContentForm, StyleButton,
} from './styles';

import Input from '../../../components/Input';
import SelectBox, { ISelectBoxValues } from '../../../components/Select';
import { getSectorForSelect } from '../../../services/sectorServices';
import { useToast } from '../../../hooks/toast';
import { IHandleCreateLocal } from '../../../ts/interfaces/local';
import { createLocal } from '../../../services/localServices';

const CreateLocal: React.FC = () => {
  const { addToast } = useToast();

  const [sector, setSector] = useState<string>('');
  const [valuesSectors, setValuesSectors] = useState<ISelectBoxValues[]>();

  const handleChangeSetor = (event: React.ChangeEvent<{ value: unknown }>) => {
    setSector(event.target.value as string);
  };

  const schema = Yup.object().shape({
    name: Yup.string()
      .required('Nome é obrigatório'),
  });
  const { handleSubmit, register, formState: { errors } } = useForm<IHandleCreateLocal>({
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    async function getSectors() {
      const sectorsData = await getSectorForSelect();
      setValuesSectors(sectorsData);
    }
    getSectors();
  }, []);

  const onSubmit = useCallback(
    async (request: IHandleCreateLocal) => {
      try {
        request.sectorId = sector;
        await createLocal(request);
        addToast({
          type: 'success',
          title: 'Novo local criado',
        });
        setTimeout(() => {
          window.location.reload();
        }, 2000);
      } catch (err) {
        addToast({
          type: 'error',
          title: 'Erro ao criar local',
          description: 'Ocorreu um erro ao inserir novo local, revise os dados e tente novamente',
        });
      }
    },
    [sector],
  );

  return (

    <Content>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <ContentForm>
          <Input {...register('name')} fontSize="16px" icon={ImLocation2} type="text" placeholder="Nome local" name="name" erros={!!errors.name} />
          <SelectBox value={sector} options={valuesSectors} name="Setores" handleChange={handleChangeSetor} />
        </ContentForm>
        <StyleButton>
          <button type="submit">Prosseguir</button>
        </StyleButton>
      </Form>
    </Content>

  );
};

export default CreateLocal;
