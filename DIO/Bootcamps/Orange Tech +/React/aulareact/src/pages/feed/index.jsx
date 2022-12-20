import {Link} from 'react-router-dom';

import Button from '../../components/Button';
import Card from '../../components/Card';
import Header from '../../components/Header';
import UserInfo from '../../components/UserInfo';

import {
  Container,
  Title,
  TitleHighlight,
  Column
} from './styles';

const FEED = () => {
  return (
    <div>
      <Header Auth={true} />
      <Container>
          <Column flex={3}>
          <Title>Feed</Title>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
        </Column>
        <Column flex={1}>
          <TitleHighlight># TOP 5 DA SEMANA</TitleHighlight>
          <UserInfo percentual={80} name="Levi Ferreira" image="https://avatars.githubusercontent.com/u/102878183?v=4"/>
          <UserInfo percentual={65} name="Levi Ferreira" image="https://avatars.githubusercontent.com/u/102878183?v=4"/>
          <UserInfo percentual={60} name="Levi Ferreira" image="https://avatars.githubusercontent.com/u/102878183?v=4"/>
          <UserInfo percentual={40} name="Levi Ferreira" image="https://avatars.githubusercontent.com/u/102878183?v=4"/>
          <UserInfo percentual={20} name="Levi Ferreira" image="https://avatars.githubusercontent.com/u/102878183?v=4"/>
        </Column>
      </Container>
    </div>
  );
}

export default FEED;