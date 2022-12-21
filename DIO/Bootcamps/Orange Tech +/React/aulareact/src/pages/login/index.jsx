import {useNavigate} from 'react-router-dom';

import Button from '../../components/Button';
import Header from '../../components/Header';
import {Input} from '../../components/Input';

import { AiFillLock, AiFillMail } from 'react-icons/ai';

import {useForm} from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

import {
  Container, Column, Row, Title, SubtitleLogin, TitleLogin, Wrapper, CreateText, ForgetText
} from './styles';

import { api } from '../../services/api'

const schema = yup.object({
  email: yup.string().email('E-mail não é valido.').required('Campo obrigatório.'),
  password: yup.string().min(3, 'A senha precisa ter 3 caracteres ou mais.').required('Campo obrigatório.'),
}).required();

const LOGIN = () => {
  
  const navigate = useNavigate();
  
  const { control, handleSubmit, formState: { errors, isValid } } = useForm({resolver: yupResolver(schema), mode: 'onSubmit'});
  const onSubmit =  async formData => {
    try{
      const { data } = await api.get(`/users?email=${formData.email}&password=${formData.password}`);
      if (data.length > 0) {
        navigate('/feed');
      } else {
        alert('Email ou senha incorretos.')
      }
    }
    catch{
      alert('Erro ao fazer login, tente novamente.')
    }

  };

  return (
    <div>
      <Header />
      <Container>
        <Column>
          <Title>
            A plataforma para você aprender com experts, dominar as principais tecnologias
            e entrar mais rápido nas empresas mais desejadas.
          </Title>
        </Column>
        <Column flex={0.8}>
          <Wrapper>
            <TitleLogin>Faça seu cadastro</TitleLogin>
            <SubtitleLogin>Faça seu login e make the change._</SubtitleLogin>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Input name="email" errorMessage={errors?.email?.message} control={control} placeholder="E-mail" leftIcon={<AiFillMail style={{color: '#8647AD'}}/>}/>
              <Input name="password" errorMessage={errors?.password?.message} control={control} placeholder="Senha" type="password" leftIcon={<AiFillLock style={{color: '#8647AD'}}/>}/>
              <Button title="Entrar" variant="secondary" onClick={() => null} type="submit"/>
            </form>
            <Row>
              <a href='/register' style={{textDecoration: 'none'}}><ForgetText>Esqueci minha senha</ForgetText></a>
              <a href='/register' style={{textDecoration: 'none'}}><CreateText>Criar conta</CreateText></a>
            </Row>
          </Wrapper>
        </Column>
      </Container>
    </div>
  );
}

export default LOGIN;