import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction : row;
    margin-bottom : 24px;
`

export const UserPicture = styled.img`
    width: 32px;
    height: 32px;
    border-radius: 22px;
    border: 3px solid #FFFFFF;
    margin-right: 12px;
`

export const NameText = styled.div`
    font-family: 'Open Sans', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 25px;
    color: #FFFFFF;
`

export const Progress = styled.div`
    width: 180px;
    height: 6px;
    background: #FFFFFF;
    border-radius: 3px;
    position: relative;

    &::after {
        content: "";
        position: absolute;
        left: 0;
        top: 0;
        width: ${({percentual}) => percentual}%;
        height: 6px;
        border-radius: 3px;
        background-color: #23DD7A;
    }
`