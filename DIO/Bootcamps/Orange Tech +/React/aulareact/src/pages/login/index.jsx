import {Link} from 'react-router-dom';

import Button from '../../components/Button';
import Header from '../../components/Header';
import {Input} from '../../components/Input';

import {
  Container,
  Title,
  TitleHighlight,
  TextContent
} from './styles';

const LOGIN = () => {
  return (
    <div>
      <Header />
      <Container>
        <div>
          <Title>
            <TitleHighlight>
              LOGIN
              <br/>
            </TitleHighlight>
             O seu futuro global agora!
          </Title>
          <TextContent>
            Domine as tecnologias utilizadas pelas empresas mais inovadoras do mundo
            e encare seu novo desafio profissional, evoluindo em comunidade com os melhores experts.
          </TextContent>
          <Button title="Começar Agora" variant='secondary' onClick={() => null}></Button>
        </div>
        <div>
          <Input placeholder="Digite seu email"/>
        </div>
      </Container>
    </div>
  );
}

export default LOGIN;