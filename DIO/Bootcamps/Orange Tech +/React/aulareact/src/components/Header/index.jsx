import {useNavigate} from 'react-router-dom';

import { IoIosArrowDown } from 'react-icons/io';
import { AiOutlineSearch } from 'react-icons/ai';

import React from 'react'
import Button from '../Button'
import { 
    Row,
    Column,
    Menu,
    MenuRight,
    UserPicture,
    Input,
    BuscarInputContainer,
    HeaderContainer,
    Wrapper,
    Logo,
    LogoClick,
    IconContainer
} from './styles'

const Header = ({Auth}) => {
  
    const navigate = useNavigate();

    return (
    <Wrapper>
        <HeaderContainer>
            <Row>
                <LogoClick href="/"><Logo src="https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco,dpr_1/r0rx7o4jm6jy2uvzt7xk" alt="Logo" /></LogoClick>
                {Auth ? (
                    <>
                        <BuscarInputContainer>
                            <IconContainer><AiOutlineSearch/></IconContainer>
                            <Input type="text" placeholder="Buscar"></Input>
                        </BuscarInputContainer>
                        <Menu>Live Code</Menu>
                        <Menu>Global</Menu>
                    </>
                ) : null}
            </Row>
            <Row>
                {Auth ? (
                    <>
                        <UserPicture src='https://avatars.githubusercontent.com/u/102878183?v=4'/>
                        <IoIosArrowDown/>
                    </>
                ) : (
                <>
                    <MenuRight href='/'>Home</MenuRight>
                    <Button title="Entrar" onClick={() => navigate('/login')}></Button>
                    <Button title="Cadastrar" onClick={() => navigate('/register')}></Button>
                </>
                )}
            </Row>
        </HeaderContainer>
    </Wrapper>
  )
}

export default Header