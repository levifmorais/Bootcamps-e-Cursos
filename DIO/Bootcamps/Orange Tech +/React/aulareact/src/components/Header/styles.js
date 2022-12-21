import styled from 'styled-components';

export const HeaderContainer = styled.header`
    width: 100%;
    max-width: 80%;
    height: 47px;

    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
`

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const Wrapper = styled.div`
    background-color: #151515;
    width: 100%;
    height: 47px;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const BuscarInputContainer = styled.div`
    width: 175px;
    height: 30px;
    background-color: #2D2D37;
    border-radius: 8px;
    padding: 2px 5px;
    margin: 0 30px;

    display: flex;
    align-items: center;
    justify-content: center;
`

export const Menu = styled.a`
    font-family: 'Open sans', sans-serif;
    font-style: normal;
    font-size: 16px;
    line-height: 25px;
    color: #ffffff;
    margin-right: 20px;
    text-decoration: none;
    white-space: nowrap;
`

export const MenuRight = styled.a`
    font-family: 'Open sans', sans-serif;
    font-style: normal;
    font-size: 16px;
    line-height: 25px;
    color: #fff;
    margin-right: 12px;
    text-decoration: none;
    white-space: nowrap;
`

export const UserPicture = styled.img`
    width: 32px;
    height: 32px;
    border-radius: 22px;
    border: 2px solid #fff;
    margin-right: 8px;
`

export const Input = styled.input`
    background: transparent;
    flex: 1;
    border: 0;
    color: #fff;
`

export const Logo = styled.img`
    width: 75px;
    align-self: center;
`
export const LogoClick = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
`
export const IconContainer = styled.div`
    opacity: 0.5;
    margin-right: 5px;
    margin-left: 8px;
    margin-top: 5px;
`