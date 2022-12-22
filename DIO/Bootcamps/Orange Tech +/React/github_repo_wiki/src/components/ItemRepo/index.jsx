import React from 'react'
import { ItemContainer } from './styles'

const ItemRepo = ({repo, removeFunction}) => {
  return (
    <ItemContainer>
        <h3>{repo.name}</h3>
        <p>{repo.full_name}</p>
        {/*<img src={repo.owner.avatar_url}/>*/}
        <a href={repo.html_url} target="_blank" rel="noreferrer">Ver repositório</a>
        <br></br>
        <a className='remove' href={removeFunction}>Remover</a>
        <hr></hr>
    </ItemContainer>
  )
}

export default ItemRepo
