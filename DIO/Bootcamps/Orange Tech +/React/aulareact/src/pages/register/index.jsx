import React from 'react'

import {useNavigate} from 'react-router-dom';

import Header from '../../components/Header'
import Button from '../../components/Button'
import { Input } from '../../components/Input'

import { AiFillLock, AiFillMail } from 'react-icons/ai';
import { BsFillPersonFill } from 'react-icons/bs';

import {useForm} from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

import {SubformLogin,LoginText,Container,Column,ForgetText,Row,SubtitleLogin,Title,TitleLogin,Wrapper} from './styles'

import { api } from '../../services/api'

const schema = yup.object({
    name: yup.string().test('name', 'O nome deve conter no mínimo duas palavras.', value => {
        const words = value.split(/\s+/);
        return words.length >= 2;
      }).required('Campo obrigatório.'),
    email: yup.string().email('E-mail não é valido.').required('Campo obrigatório.'),
    password: yup.string().min(3, 'A senha precisa ter 3 caracteres ou mais.').required('Campo obrigatório.'),
  }).required();

const REGISTER = () => {
  
    const navigate = useNavigate();
    const { control, handleSubmit, formState: { errors, isValid } } = useForm({resolver: yupResolver(schema), mode: 'onSubmit'});
    const onSubmit =  async formData => {
        
        async function postData() {
            const response = await api.post(`/users`, {
                name: formData.name,
                email: formData.email,
                password: formData.password
            });
            console.log("response: ",response)
            if (response.status === 201) {
                navigate('/login');
            } else {
                alert('Email ou senha incorretos.')
            }
        }

        try{
            await api.get(`/users?email=${formData.email}`).then((response) => {
                if (response.data.length > 0) {
                    alert('Email já cadastrado.')
                }
                else {
                    postData();
                }
            })
        } catch{
        alert('Erro ao fazer cadastro, tente novamente.')
        } 

    };



    return (
    <>
        <Header />
        <Container>
            <Column>
                <Title>A plataforma para você aprender com experts,
                    dominar as principais tecnologias e entrar mais rápido nas empresas mais desejadas.
                </Title>
            </Column>
            <Column flex={0.8}> 
            <TitleLogin>Comece agora grátis</TitleLogin>
            <Wrapper>
                <SubtitleLogin>Crie sua conta e make the change._</SubtitleLogin>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Input name="name" errorMessage={errors?.name?.message} control={control} placeholder="Nome completo" leftIcon={<BsFillPersonFill style={{color: '#8647AD'}}/>}/>
                    <Input name="email" errorMessage={errors?.email?.message} control={control} placeholder="E-mail" leftIcon={<AiFillMail style={{color: '#8647AD'}}/>} />
                    <Input name="password" errorMessage={errors?.password?.message} control={control} placeholder="Senha" type="password" leftIcon={<AiFillLock style={{color: '#8647AD'}}/>}/>
                    <Button title="Criar minha conta" variant="secondary" onClick={() => null} type="submit"/>
                </form>
                <SubformLogin>Ao clicar em "criar minha conta grátis", declaro que
                        aceito as Políticas de Privacidade e os Termos de Uso da DIO.
                </SubformLogin>
            </Wrapper>
            <Row>
                <a href="/login" style={{textDecoration: 'none',display:'flex'}}><ForgetText>Já tenho conta.</ForgetText>
                <LoginText>Fazer login</LoginText></a>
            </Row>
            </Column>
        </Container>
    </>
  )
}

export default REGISTER
