import React from 'react'

import { InputContainer } from './styles'

const Input = ({value, onChange}) => {
  return (
    <InputContainer>
        <input type="text" placeholder='Buscar repositório. Exemplo:"usuário/nome-repositório"' value={value} onChange={onChange}/>
    </InputContainer>
  )
}

export default Input
