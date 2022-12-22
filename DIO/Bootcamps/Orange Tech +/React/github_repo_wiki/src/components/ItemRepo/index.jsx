import React from 'react'
import { ItemContainer } from './styles'

const ItemRepo = ({repo, onRemove}) => {
  return (
    <ItemContainer>
        <div>
          <h3>{repo.name}</h3>
          <img src={repo.owner.avatar_url} alt='icon'/>
        </div>
        <p className='sub'>{repo.full_name}</p>
        <p className='detail'>{repo.description ? "Descrição: "+repo.description : "Sem descrição."}</p>
        <a href={repo.html_url} className="see" target="_blank" rel="noreferrer">Ver repositório</a>
        <a className='remove' onClick={() => onRemove(repo.id)} href="#">Remover</a>
        <hr></hr>
    </ItemContainer>
  )
}

export default ItemRepo
