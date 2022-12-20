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
    Logo
} from './styles'

const Header = ({Auth}) => {
  return (
    <Wrapper>
        <HeaderContainer>
            <Row>
                <Logo src="https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco,dpr_1/r0rx7o4jm6jy2uvzt7xk" alt="Logo" />
                {Auth ? (
                    <>
                        <BuscarInputContainer>
                            <Input type="text" placeholder="Buscar"></Input>
                        </BuscarInputContainer>
                        <Menu>Live Code</Menu>
                        <Menu>Global</Menu>
                    </>
                ) : null}
            </Row>
            <Row>
                {Auth ? (
                    <UserPicture src='https://avatars.githubusercontent.com/u/102878183?v=4'/>
                ) : (
                <>
                    <MenuRight href='/'>Home</MenuRight>
                    <Button title="Entrar"></Button>
                    <Button title="Cadastrar"></Button>
                </>
                )}
            </Row>
        </HeaderContainer>
    </Wrapper>
  )
}

export default Header