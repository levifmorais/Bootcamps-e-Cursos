import styled, { css } from 'styled-components';

export const ButtonContainer = styled.button`
    background: #565656;
    border-radius: 22px;
    position: relative;

    color: #fff;
    padding: 2px 12px;
    min-width: 120px;
    width: 100%;

    font-size: 14px;

    border: none;

    margin: 0 5px;

    font-family: 'Open sans', sans-serif;
    font-weight: bold;

    &: hover {
        opacity: 0.6;
        cursor: pointer;
    }

    ${({variant}) => variant !== 'primary' && css`

        min-width: 167px;
        height: 33px;    
        
        background: #E4105D;
        
        font-size: 16px;

        border: none;

        &:hover {
            opacity: 0.6;
            cursor: pointer;
        }

        &::after {
            content: '';
            position: absolute;
            border: 1px solid #E4105D;
            top: -6px;
            left: -6px;
            width: calc(100% + 10px);
            height: calc(100% + 10px);
            border-radius: 22px;
        }
        `}
`