import React from 'react'

import { IoSearchCircleOutline } from 'react-icons/io5'

import { ButtonContainer } from './styles'

const Button = ({onClick}) => {
  return (
    <ButtonContainer onClick={onClick}>
        <IoSearchCircleOutline size={25}/>
        Buscar
    </ButtonContainer>
  )
}

export default Button
