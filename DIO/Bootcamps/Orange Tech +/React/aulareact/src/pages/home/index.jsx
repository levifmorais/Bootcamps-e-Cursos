import { useNavigate } from 'react-router-dom';

import Button from '../../components/Button';
import Header from '../../components/Header';
import {
  Container,
  Title,
  TitleHighlight,
  TextContent,
  Wrapper,
  ButtonWrapper
} from './styles';

const HOME = () => {
  
  const navigate = useNavigate();

  const handleClickSignIn = () => {
    navigate('/login');
  }
  
  return (
    <div>
      <Header />
      <Container>
        <Wrapper>
          <Title>
            <TitleHighlight>
              Implemente
              <br/>
            </TitleHighlight>
             O seu futuro global agora!
          </Title>
          <TextContent>
            Domine as tecnologias utilizadas pelas empresas mais inovadoras do mundo
            e encare seu novo desafio profissional, evoluindo em comunidade com os melhores experts.
          </TextContent>
          <ButtonWrapper>
            <Button title="Começar Agora" variant='secondary' onClick={handleClickSignIn}></Button>
          </ButtonWrapper>
        </Wrapper>
        <div>
          <img src="https://hermes.digitalinnovation.one/public/components/pages/home/how-it-works/emerging-technologies.png" alt="Banner"/>
        </div>
      </Container>
    </div>
  );
}

export default HOME;