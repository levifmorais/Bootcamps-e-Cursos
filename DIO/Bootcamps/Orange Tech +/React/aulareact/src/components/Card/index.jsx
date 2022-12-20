import React from 'react'
import { FiThumbsUp } from 'react-icons/fi' 

import {CardContainer,Content,ImageBackground,UserPicture,UserInfo,HasInfo,PostInfo} from './styles'

const Card = () => {
  return (
    <CardContainer>
      <ImageBackground src='https://www.alura.com.br/artigos/assets/html-css-js/html-css-e-js-definicoes.png'/>
      <Content>
        <UserInfo>
          <UserPicture src="https://avatars.githubusercontent.com/u/102878183?v=4"/>
          <div>
            <h4>Levi Ferreira</h4>
            <p>Há 8 minutos</p>
          </div>
        </UserInfo>
        <PostInfo>
          <h4>Projeto para curso de HTML e CSS</h4>
          <p>Projeto feito no curso de html e css no bootcamp. <strong>Saiba Mais</strong></p>
        </PostInfo>
        <HasInfo>
          <h4>#HTML #CSS #JavaScript</h4>
          <p>
            <FiThumbsUp/> 8
          </p>
        </HasInfo>
      </Content>
    </CardContainer>
  )
}

export default Card
