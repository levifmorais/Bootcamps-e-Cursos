import styled from 'styled-components';

export const Container = styled.main`
    width: 100%;
    max-width: 80%;
    margin: 0 auto;
    margin-top: 70px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

export const Wrapper = styled.div`
    max-width: 320px;
`

export const Column = styled.div`
    flex: ${({flex}) => flex};
`

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 15px;
`

export const Title = styled.h2`
    font-family: 'Open sans', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    width: 550px;
    margin-bottom: 20px;
    line-height: 44px;
    color: #ffffff;
`

export const TitleLogin = styled.p`
    font-family: 'Open sans', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    margin-bottom: 20px;
    line-height: 44px;
`

export const SubtitleLogin = styled.p`
    font-family: 'Open sans', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    margin-bottom: 35px;
    line-height: 25px;
`
export const SubformLogin = styled.p`
    font-family: 'Open sans', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 25px;
    margin-top: 35px;
    text-align: left;
`

export const ForgetText = styled.p`
    font-family: 'Open sans', sans-serif;
    font-style: bold;
    font-weight: 700;
    font-size: 14px;
    line-height: 19px;

    color: #FFFFFF; 
    margin-right: 5px;
`

export const LoginText = styled.p`
    font-family: 'Open sans', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 19px;

    color: #23DD7A;
`
